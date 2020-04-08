const vodLibrary = [
   {
     title: 'The Haunting Of The Smart House',
     lecturerName: 'Tomek Nowicki',
     imageUrl: 'Tomasz_Nowicki.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Edge Computing: One Too Many Questions',
     lecturerName: 'Melissa Chavez Torres',
     imageUrl: 'Melissa_Chavez_Torres.jpeg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Ethical Machine Learning',
     lecturerName: 'Milena Aragon Wendland',
     imageUrl: 'Milena_Aragon_Wendland.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Why Imperfection Is Better?',
     lecturerName: 'Maciej Kubicki',
     imageUrl: 'Maciej_Kubicki.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Data Consistency In Complex Systems',
     lecturerName: 'Joris Bouwsma',
     imageUrl: 'Joris_Bouwsma.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Compliance And The Art Of Storytelling',
     lecturerName: 'Molly Young',
     imageUrl: 'Molly_Elise_Young.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Quantum Computers Explained',
     lecturerName: 'Tomasz Stopa',
     imageUrl: 'Tomasz_Stopa.JPG',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'KEYNOTE: How People Make Risk Choices?',
     lecturerName: 'Andy Ellis',
     imageUrl: 'Andy_Ellis.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Data Drift: Machine Learning And Unlearning',
     lecturerName: 'Christophe Salperwyck',
     imageUrl: 'Christophe_Salperwyck.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Delevoping Visual Cloud Services Faster With Right SDKs',
     lecturerName: 'Petar Torre',
     imageUrl: 'Petar_Torre.png',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Artificial Intelligence (AI) In The Context Of Emerging Legal Issues',
     lecturerName: 'R. Bieda & G. Wiktorzak   ',
     imageUrl: 'Gabriela_Wiktorzak.JPG',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'EZPATH: A New Safety-Review Process For Akamai Products',
     lecturerName: 'Jonathan Herzog',
     imageUrl: 'Jonathan_Herzog.png',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Kubernetes. Kuber-what-is?',
     lecturerName: 'Rafal Banaszkiewicz',
     imageUrl: 'Rafal_Banaszkiewicz.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'U Want To Hackz? N00BSecurity Labz',
     lecturerName: 'S. Jakubowski & B. Jakubowski',
     imageUrl: 'Bartosz_Jakubowski.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Hacking Ecology',
     lecturerName: 'Theodor Sperlea',
     imageUrl: 'Theodor_Sperlea.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Spectre, Meltdown And The Ghost In The Machine',
     lecturerName: 'James Kretchmar',
     imageUrl: 'James_Kretchmar.png',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'On-call Burnout Is A Real Thing',
     lecturerName: 'Piotr Stachowicz',
     imageUrl: 'Piotr_Stachowicz.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Internet Rush Hour - A Behind The Scenes Look',
     lecturerName: 'Larry Underhill',
     imageUrl: 'Larry_Underhill.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'Asking About Video Quality',
     lecturerName: 'Lucjan Janowski',
     imageUrl: 'Lucjan_Janowski.JPG',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
   {
     title: 'My Smart Home On Akamai Platform',
     lecturerName: 'Szymon Kwapiszewski',
     imageUrl: 'Szymon_Kwapiszewski.jpg',
     streamUrl: 'https://example.com/stream/master.m3u8'
   },
 ]

// html form code to include when selecting live/vod as a content type

const liveForm = `<div id="live_tracks">
<fieldset class="radio-button">
<legend>Which track?</legend>
<input type="radio" id="track1" name="track_num" value="1">
<label for="track1" class="radio-label">1</label>
<input type="radio" id="track2" name="track_num" value="2">
<label for="track2" class="radio-label">2</label>
<input type="radio" id="track3" name="track_num" value="3">
<label for="track3" class="radio-label">3</label>
</fieldset>
</div>`
