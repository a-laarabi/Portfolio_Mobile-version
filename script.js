// work Section

const workObject = [
  {
    title: 'Tonic',
    img: 'img/Snapshoot_Portfolio.png',
    projectDetail:['CANOPY', 'Back End Dev', '2015'],
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages:['html', 'css', 'javaScript'],
    popupinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    title: 'Multi-Post Stories',
    img:'img/Snapshoot_Portfolio-1.png',
    projectDetail:['FACEBOOK', 'Full Stack Dev', '2015'],
    info: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages:['html', 'Ruby on rails', 'css', 'javaScript'],
    popupinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    title: 'Facebook 360',
    img: 'img/Snapshoot_Portfolio-2.png',
    projectDetail:['FACEBOOK', 'Full Stack Dev', '2015'],
    info: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages:['html', 'Ruby on rails', 'css', 'javaScript'],
    popupinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    title: 'Uber Navigation',
    img: 'img/Snapshoot_Portfolio-3.png',
    projectDetail:['CANOPY', 'Lead Developer', '2015'],
    info: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    languages:['html', 'Ruby on rails', 'css', 'javaScript'],
    popupinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
]

let ul = document.createElement('ul');
for(let i = 0; i < workObject.length; i += 1){
  let li = document.createElement('li');
  li.classList.add('project');
  section = document.createElement('section');
  section.classList.add('inside_project');
  

  ul.appendChild(li)
}
document.getElementById('work').appendChild(ul);