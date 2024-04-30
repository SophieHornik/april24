let paragraph1 = document.getElementById('paragraph');
let year = document.getElementById('title');
let main = document.getElementById('main');
let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let main2 = document.getElementById('main2');
function showOverview() {
  paragraph1.innerHTML= "<p>According to <a href='https://www.bls.gov/ooh/healthcare/veterinarians.htm#tab-2' class='links'>The U.S. Bureau Of Labor Statistics</a>, The main responsibilities of a vet is to: <ul><li> Examine animals to assess their health and diagnose problems</li><li>Treat and dress wounds</li><li>Perform surgery on animals</li> <li>Test for and vaccinate against diseases</li><li>Operate medical equipment, such as x-ray machines</li><li>Advise animal owners about general care, medical conditions, and treatments</li> <li>Prescribe medication</li> <li>Euthanize animals</li></ul><br> According to <a class='links' href='https://www.sgu.edu/blog/veterinary/where-do-veterinarians-work/'>St. George's University</a> Vet's can work in numerous locations including: <ul><li>Zoos and aquariums</li><li> Food-processing plants</li><li>Farms and ranches<li>Colleges and universities</li><li>Laboratories</li><li>Animal shelters</li><li>Racetracks</li><li>National parks and other open areas</li><li>Offices</li></ul></p>"
  year.textContent = "Overview"
  main.src = "vetwdog.jpg"
  pic1.src = "cutecat.jpg"
  pic2.src = "goldenvet.jpg"
  main2.src="tigervet.jpg"
}




function showEducation() {
  paragraph1.innerHTML = "On January 10th, 1776, Thomas Paine's seminal work, Common Sense, was published, sparking a revolutionary wave that would alter the course of American history. Paine's persuasive and straightforward writing style made complex political ideas accessible to the common people, advocating for independence from British rule. His powerful arguments and call for a republic resonated deeply with the American colonists, inspiring widespread support for the revolutionary cause. Common Sense served as a catalyst for the shift in public sentiment, galvanizing the movement for independence and laying the groundwork for the Declaration of Independence later that year. Paine's work not only articulated the grievances against British tyranny but also stirred a sense of unity and purpose among the colonists, ultimately contributing significantly to the birth of the United States of America."
  title.textContent = "Education"
  main.src = "vetgrad.jpg"
  pic1.src = "studyingdr.jpg"
  pic2.src = "catanddog.jpg"
  main2.src="catanddog.jpg"

}
function showEarnings() {
  paragraph1.innerHTML = "On January 10, 1861, Florida officially seceded from the Union, becoming the third state to do so during the tumultuous period leading up to the American Civil War. The state's secession was driven by a combination of economic, social, and political factors, including concerns over the preservation of slavery and states' rights. Florida's decision to join the Confederate States of America intensified the regional tensions and marked a pivotal moment in the escalation toward the Civil War. The impact of Florida's secession was felt not only in the state itself but also across the nation as it fueled the growing divide between the Northern and Southern states. The secession of Florida, along with other Southern states, ultimately culminated in the deadliest conflict in American history, the Civil War, which lasted from 1861 to 1865 and had profound and lasting consequences for the nation."
 title.textContent = "Earnings"
  main.src = "dogmoney.jpg"
  pic1.src = "dogkisscat.jpg"
  pic2.src = "catmoney.jpg"
}

