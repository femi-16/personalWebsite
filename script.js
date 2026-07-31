let contact_cards = document.getElementsByClassName('contact-images');
let contact_button = document.getElementsByClassName('btn-container');
let contact_divs = document.getElementsByClassName('contact_div')

let links = [
  'https://www.linkedin.com/in/olufemi-falebita-104a3b334/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjMfTqJMnT4uheLYkLHMWKQ%3D%3D',
  'https://github.com/femi-16',
  'https://docs.google.com/document/d/1O6Wb2riHk2shEqMCvOFZQWx8T4C6Uwq4/edit?usp=sharing&ouid=104325462356897600627&rtpof=true&sd=true',
];


for (let i = 0; i < contact_button.length; i++) {

  let buttonLink = document.createElement('a');
  buttonLink.href = links[i];
  buttonLink.rel = 'noopener noreferrer';
  buttonLink.target = '_blank';

let githubBtn = document.createElement('button');
githubBtn.classList.add('github-btn');
githubBtn.innerHTML = 'Click Me!'


buttonLink.append(githubBtn);
contact_button[i].append(buttonLink);



contact_divs[i].onmouseout = () => {
    event.preventDefault();
    console.log("Not hovering");
    contact_cards[i].style.opacity = 1;
    githubBtn.style.display = 'none';
}

contact_divs[i].onmouseover = () => {
    event.preventDefault();
    console.log("Hovering");
    contact_cards[i].style.opacity = .5;
    githubBtn.style.display = 'block';
}
}