let paragraph1 = document.getElementById('paragraph');
let year = document.getElementById('title');
let main = document.getElementById('main');
let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let main2 = document.getElementById('main2');
function showOverview() {
  paragraph1.innerHTML= "<p>According to <a href='https://www.bls.gov/ooh/healthcare/veterinarians.htm#tab-2' class='links'>The U.S. Bureau Of Labor Statistics</a>, <br> <b>The main responsibilities of a vet is to:</b> <ul><li> Examine animals to assess their health and diagnose problems</li><li>Treat and dress wounds</li><li>Perform surgery on animals</li> <li>Test for and vaccinate against diseases</li><li>Operate medical equipment, such as x-ray machines</li><li>Advise animal owners about general care, medical conditions, and treatments</li> <li>Prescribe medication</li> <li>Euthanize animals</li></ul><br> According to <a class='links' href='https://www.sgu.edu/blog/veterinary/where-do-veterinarians-work/'>St. George's University</a><br> <b>Vet's can work in numerous locations including:</b><ul><li>Zoos and aquariums</li><li> Food-processing plants</li><li>Farms and ranches<li>Colleges and universities</li><li>Laboratories</li><li>Animal shelters</li><li>Racetracks</li><li>National parks and other open areas</li><li>Offices</li></ul></p>"
  year.textContent = "Overview"
  main.src = "vetwdog.jpg"
  pic1.src = "cutecat.jpg"
  pic2.src = "goldenvet.jpg"
  main2.src="tigervet.jpg"
}




function showEducation() {
  paragraph1.innerHTML = "<p>According to <a href='https://learn.org/articles/What_are_the_Education_Requirements_to_Be_a_Veterinarian.html' class='links'>Learn.Org</a>, in order to become a Veterinarian you must attend 4 years of vet school. Having a bachelors degree can increase your chances of getting into a vet school. Some schools have prerequisite courses you must have taken prior to attending vet school. <br> <b>Some common prerequisites are:</b> <ul><li>animal biology</li> <li>microbiology</li> <li>animal nutrition</li> <li>zoology</li> <li>systemic physiology</li></ul><br><p> <a href='www.aavmc.org' class='links'>The Association of American Veterinary Medical Colleges </a> provides a useful table that allows students to check the requirements for individual colleges<p> <br> <p><b>Some of the <a href='https://www.usnews.com/best-graduate-schools/top-health-schools/veterinarian-rankings' class='links'>top vet schools in the United states </a>are:</b></p> <br> <a href='https://www.vetmed.ucdavis.edu/'> <button id='davis'>U of California Davis</button></a> <a href='vetmedbiosci.colostate.edu/'> <button id='colorado'>Colorado State University</button></a><a href='https://www.vet.cornell.edu/'> <button id='cornell'> Cornell University Ithaca, NY</button></a> <a href='https://vet.osu.edu/'> <button id='ohio'>The Ohio State University</button></a> <a href='https://www.ncsu.edu/'> <button id='nc'>North Carolina State</button></a> "
  title.textContent = "Education"
  main.src = "vetgrad.jpg"
  pic1.src = "studyingdr.jpg"
  pic2.src = "catanddog.jpg"
  main2.src="vethorse.jpg"

}
function showEarnings() {
  paragraph1.innerHTML = "On January 10, 1861, Florida officially seceded from the Union, becoming the third state to do so during the tumultuous period leading up to the American Civil War. The state's secession was driven by a combination of economic, social, and political factors, including concerns over the preservation of slavery and states' rights. Florida's decision to join the Confederate States of America intensified the regional tensions and marked a pivotal moment in the escalation toward the Civil War. The impact of Florida's secession was felt not only in the state itself but also across the nation as it fueled the growing divide between the Northern and Southern states. The secession of Florida, along with other Southern states, ultimately culminated in the deadliest conflict in American history, the Civil War, which lasted from 1861 to 1865 and had profound and lasting consequences for the nation."
 title.textContent = "Earnings"
  main.src = "dogmoney.jpg"
  pic1.src = "dogkisscat.jpg"
  pic2.src = "catmoney.jpg"
  main2.src="reversevet.jpg"
}

