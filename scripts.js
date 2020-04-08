
let lecturerName = document.querySelector('#lecturer_name')

// array of lectures to choose from
const lecturesList = vodLibrary.map(function (item) {
    return { 
        title: item.title,
        lecturerName: item.lecturerName,
        imageUrl: item.imageUrl,
        streamUrl: item.streamUrl
    }
})

//code to fill in select list

lecturesList.forEach(function (item) {
  const nameSelect = item.lecturerName
  const textToAppend = `<option value='${nameSelect}'>${nameSelect}</option>`
  lecturerName.insertAdjacentHTML('beforeend', textToAppend) 
})

// updating other fields with data based on chosen lecturer

let selectedName = ''

const fillInForms = function() {
  let filtered = lecturesList.find(function (item) {
    return item.lecturerName === selectedName
  })
  document.querySelector('#stream_title').value = filtered.title
  document.querySelector('#image_url').value = filtered.imageUrl
  document.querySelector('#stream_url').value = filtered.streamUrl
}

lecturerName.addEventListener('change', function (e) {
  selectedName = e.target.value
  e.preventDefault()
  fillInForms()
})

// defining functions to insert html form based on the type of content
  document.querySelector("#live").addEventListener('click', function (){ 
      if(document.querySelector('#live_tracks') === null) { 
        document.querySelector(".radio-button").insertAdjacentHTML('afterend', liveForm)
      }
    })


  document.querySelector("#vod").addEventListener('change', function() { 
    if(document.querySelector('#live_tracks') != null) {
      document.querySelector('#live_tracks').remove()
    }
})

// function to fetch db records from endpoints 

const fetchLibrary = async (url, options) => {
  const response = await fetch(url, options)
  if (response.status === 200) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Unable to fetch data')
  }
}

// Fetch API request to upload data form 

const uploadForm = async (url, options) => {
  response = await fetch(url, options)
  if (response.status === 200) {
    const data = await response.text()
    return data
  } else {
    throw new Error('Unable to fetch data')
  }
}

// render live tracks list from the db

const renderLiveList = async () => {
  const liveTable = document.querySelector('#live-list > tbody')
  liveTable.innerHTML = ''
  let liveList = await fetchLibrary('http://localhost:8080/affinity/server_live.php')
  
      liveList.forEach(function (record) {
      const tableRow = document.createElement('tr')
      tableRow.innerHTML = 
      `<td class="track_id">${record.track_id}</td>
      <td>${record.stream_url}</td>
      <td>${record.title}</td>
      <td>${record.lecturer_name}</td>`
      liveTable.appendChild(tableRow)
      })
  }

  renderLiveList()
  
// render vodlist from the actual db state and delete the item from it

const renderList = async () => {
  const vodTable = document.querySelector('#vod-list > tbody')
  vodTable.innerHTML = ''
  let vodList = await fetchLibrary('http://localhost:8080/affinity/server_vod.php')
  
      vodList.forEach(function (record) {
      const tableRow = document.createElement('tr')
      tableRow.innerHTML = 
      `<td class="content_id">${record.content_id}</td>
      <td>${record.stream_url}</td>
      <td>${record.title}</td>
      <td>${record.lecturer_name}</td>
      <td>${record.image_url}</td>
      <td><button class="delete" data-id="${record.content_id}">Delete</button></td>`
      vodTable.appendChild(tableRow)
      })
}

const renderVodList = () => {

  renderList()  
    // deleting an item from DB on the delete button + re-render new db state
    .then(() => {
      document.querySelectorAll('.delete').forEach(function (row) {
        row.addEventListener('click', async (e) => {
          const url = '../affinity/server.php'
          let formData = new FormData()
          formData.append('oper', 'del')
          formData.append('content_type', 'vod')
          formData.append('content_id', e.target.dataset.id)  
          const options = {method: 'POST',
          body: formData}
      
          uploadForm(url, options).then(() => {
            alert('Record successfully deleted')
          }).then(() => {
            renderVodList()
          }).catch((err) => {
            alert(err)
          })
        })
      })
    })
}

renderVodList()

// optional - update the list periodically for sync if many users will access it 
// const refreshTable = setInterval(() => {
//   renderVodList()
//   console.log('knock')
// },10000)



// uploading new record to DB

document.querySelector('#myForm').addEventListener('submit', (e) => {
  e.preventDefault
  let formData = e.target;
  let formObject = new FormData(formData)
  const url = '../affinity/server.php'
  const options = {method: 'POST',
                  body: formObject}

    uploadForm(url, options).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
})












