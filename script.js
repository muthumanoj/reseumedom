let profile = document.createElement("div");
profile.className='top';
document.querySelector('body').appendChild(profile);

let imgdiv = document.createElement("div");
profile.appendChild(imgdiv);

let image = document.createElement("img");
image.setAttribute('src',"./images/brain.jpg");
imgdiv.appendChild(image);


let border = document.createElement('div');
border.className='gap';
profile.appendChild(border);

let proname=document.createElement('span');
let name = document.createTextNode("Mr.XXXXXX");
proname.appendChild(name);
profile.appendChild(proname);

let proadd = document.createElement('pre');
let add = document.createTextNode("N Demen Avenue,Chicago 99999|999-999-9999 | hello@kickeresume.com|www.kickersume.com");
proadd.appendChild(add)
profile.appendChild(proadd)

let hr1 = document.createElement("hr");
hr1.className='r';
profile.appendChild(hr1);

//profile

let pro = document.createElement("h3")
pro.className='pro';
let i1 = document.createElement('i');
i1.className='fas fa-user';
pro.appendChild(i1);
let h3 = document.createTextNode('Profile');
pro.appendChild(h3)
document.querySelector("body").appendChild(pro);

let prodef = document.createElement("div");
prodef.className='profile';
let para1 = document.createTextNode("Innovative optimized solution seeker.Excited  to be at the deployment  phase of my new career as a wed developer.I am ambitious , adventurous, assiduous ,animted , and an alliteration advocate");
prodef.appendChild(para1);
document.querySelector("body").appendChild(prodef);
//skill
let skill = document.createElement("div");
skill.className='skills';
let ski = document.createElement('h3');
skill.appendChild(ski);
let i2 = document.createElement('i');
i2.className='fas fa-award icon';
ski.appendChild(i2);
let skih3 = document.createTextNode("Skills");
ski.appendChild(skih3);
document.querySelector("body").appendChild(skill);
//technical skills
let tech = document.createElement('div');
tech.className='techski';
let techski = document.createElement('h4');
tech.appendChild(techski);
let teski = document.createTextNode("Technical Skills");
techski.appendChild(teski);
document.querySelector("body").appendChild(tech);

//four techincal skills

let techniskill = document.createElement('div')
techniskill.className='tech';
document.querySelector('body').appendChild(techniskill);

let table1 = document.createElement('table');
techniskill.appendChild(table1);

let tectr1 = document.createElement('tr')
table1.appendChild(tectr1);

let tectd1 = document.createElement('td');
tectr1.appendChild(tectd1);
let td1text = document.createTextNode("Java Script");
tectd1.appendChild(td1text);


let tectd2 = document.createElement('td');
tectr1.appendChild(tectd2);
let tectd2range = document.createElement('input');
tectd2range.setAttribute('type','range');
tectd2range.setAttribute('min','0');
tectd2range.setAttribute('max','10');
tectd2range.setAttribute('value','8');

tectd2.appendChild(tectd2range);

let tectr2 = document.createElement('tr')
table1.appendChild(tectr2);

let tectd3 = document.createElement('td');
tectr2.appendChild(tectd3);
let td3text = document.createTextNode("CSS");
tectd3.appendChild(td3text);


let tectd4 = document.createElement('td');
tectr2.appendChild(tectd4);
let tectd4range = document.createElement('input');
tectd4range.setAttribute('type','range');
tectd4range.setAttribute('min','0');
tectd4range.setAttribute('max','10');
tectd4range.setAttribute('value','5');
tectd4.appendChild(tectd4range);


let tectr3 = document.createElement('tr')
table1.appendChild(tectr3);

let tectd5 = document.createElement('td');
tectr3.appendChild(tectd5);
let td5text = document.createTextNode("HTML");
tectd5.appendChild(td5text);


let tectd6 = document.createElement('td');
tectr3.appendChild(tectd6);
let tectd6range = document.createElement('input');
tectd6range.setAttribute('type','range');
tectd6range.setAttribute('min','0');
tectd6range.setAttribute('max','10');
tectd6range.setAttribute('value','7');

tectd6.appendChild(tectd6range);


let tectr4 = document.createElement('tr')
table1.appendChild(tectr4);

let tectd7 = document.createElement('td');
tectr4.appendChild(tectd7);
let td7text = document.createTextNode("React");
tectd7.appendChild(td7text);


let tectd8 = document.createElement('td');
tectr4.appendChild(tectd8);
let tectd8range = document.createElement('input');
tectd8range.setAttribute('type','range');
tectd8range.setAttribute('min','0');
tectd8range.setAttribute('max','10');
tectd8range.setAttribute('value','9');
tectd8.appendChild(tectd8range);9


let tectr5 = document.createElement('tr')
table1.appendChild(tectr5);

let tectd9 = document.createElement('td');
tectr5.appendChild(tectd9);
let td9text = document.createTextNode("MangoDB");
tectd9.appendChild(td9text);


let tectd10 = document.createElement('td');
tectr5.appendChild(tectd10);
let tectd10range = document.createElement('input');
tectd10range.setAttribute('type','range');
tectd10range.setAttribute('min','0');
tectd10range.setAttribute('max','10');
tectd10range.setAttribute('value','4');
tectd10.appendChild(tectd10range);

let tectr6 = document.createElement('tr')
table1.appendChild(tectr6);

let tectd11 = document.createElement('td');
tectr6.appendChild(tectd11);
let td11text = document.createTextNode("Deployment");
tectd11.appendChild(td11text);


let tectd12 = document.createElement('td');
tectr6.appendChild(tectd12);
let tectd12range = document.createElement('input');
tectd12range.setAttribute('type','range');
tectd12range.setAttribute('min','0');
tectd12range.setAttribute('max','10');
tectd12range.setAttribute('value','4');
tectd12.appendChild(tectd12range);


//additional skills

let addskill = document.createElement('div');
addskill.className='addski';
let addsk = document.createElement('h4');
addskill.appendChild(addsk);
let addski = document.createTextNode("Additional Skills");
addsk.appendChild(addski);
document.querySelector('body').appendChild(addskill);

//four additional skill

let additionskill = document.createElement('div');
additionskill.className='add';
document.querySelector('body').appendChild(additionskill);



let table2 = document.createElement('table');
additionskill.appendChild(table2);

let addtr1 = document.createElement('tr');
table2.appendChild(addtr1);

let addtd1 = document.createElement('td');
addtr1.appendChild(addtd1);
let addtd1text = document.createTextNode('Project Management');
addtd1.appendChild(addtd1text);

let addtd2 = document.createElement('td');
addtr1.appendChild(addtd2);
let addtd2range = document.createElement('input');
addtd2range.setAttribute('type','range');
addtd2range.setAttribute('min','0');
addtd2range.setAttribute('max','10')
addtd2range.setAttribute('value','9');
addtd2.appendChild(addtd2range);

let addtr2 = document.createElement('tr');
table2.appendChild(addtr2);

let addtd3 = document.createElement('td');
addtr2.appendChild(addtd3);
let addtd3text = document.createTextNode('Requirements');
addtd3.appendChild(addtd3text);

let addtd4 = document.createElement('td');
addtr2.appendChild(addtd4);
let addtd4range = document.createElement('input');
addtd4range.setAttribute('type','range');
addtd4range.setAttribute('min','0');
addtd4range.setAttribute('max','10');
addtd4range.setAttribute('value','7');
addtd4.appendChild(addtd4range);


let addtr3 = document.createElement('tr');
table2.appendChild(addtr3);

let addtd5 = document.createElement('td');
addtr3.appendChild(addtd5);
let addtd5text = document.createTextNode('Business Management');
addtd5.appendChild(addtd5text);

let addtd6 = document.createElement('td');
addtr3.appendChild(addtd6);
let addtd6range = document.createElement('input');
addtd6range.setAttribute('type','range');
addtd6range.setAttribute('min','0');
addtd6range.setAttribute('max','10');
addtd6range.setAttribute('value','8');
addtd6.appendChild(addtd6range);

let addtr4 = document.createElement('tr');
table2.appendChild(addtr4);

let addtd7 = document.createElement('td');
addtr4.appendChild(addtd7);
let addtd7text = document.createTextNode('React');
addtd7.appendChild(addtd7text);

let addtd8 = document.createElement('td');
addtr4.appendChild(addtd8);
let addtd8range = document.createElement('input');
addtd8range.setAttribute('type','range');
addtd8range.setAttribute('min','0');
addtd8range.setAttribute('max','10');
addtd8range.setAttribute('value','5')
addtd8.appendChild(addtd8range);

let addtr5 = document.createElement('tr');
table2.appendChild(addtr5);

let addtd9 = document.createElement('td');
addtr5.appendChild(addtd9);
let addtd9text = document.createTextNode('Redux');
addtd9.appendChild(addtd9text);

let addtd10 = document.createElement('td');
addtr5.appendChild(addtd10);
let addtd10range = document.createElement('input');
addtd10range.setAttribute('type','range');
addtd10range.setAttribute('min','0');
addtd10range.setAttribute('max','10');
addtd10range.setAttribute('value','9');

addtd10.appendChild(addtd10range);

//work experience
let work1 = document.createElement('div');
work1.className='work';
document.querySelector('body').appendChild(work1);

let work1head = document.createElement('h3');
work1.appendChild(work1head);
let work1icon = document.createElement('i');
work1icon.className='fas fa-award icon';
work1head.appendChild(work1icon);
let work1text = document.createTextNode('Work Experience');
work1head.appendChild(work1text);

let evenman = document.createElement('div');
evenman.className='em';
work1.appendChild(evenman);

let worktab1 = document.createElement('table');
evenman.appendChild(worktab1);

let worktr1 = document.createElement('tr');
worktab1.appendChild(worktr1);

let worktd1 = document.createElement('td');
worktr1.appendChild(worktd1);

let evenh4 = document.createElement('h4');
worktd1.appendChild(evenh4);
let evenh4text = document.createTextNode("Event Manager");
evenh4.appendChild(evenh4text);

let worktd2 = document.createElement('td');

worktr1.appendChild(worktd2);
let evendate = document.createTextNode('3/2014-02/2017');
worktd2.appendChild(evendate);

let worktr2 =document.createElement('tr');
worktab1.appendChild(worktr2);
let worktr2text = document.createTextNode('C3 presents,Washington DC');
worktr2.appendChild(worktr2text);

let worktr3 = document.createElement('tr');
worktab1.appendChild(worktr3);

let worktd3 = document.createElement('td');
worktd3.setAttribute('style',rowspan='0');
worktr3.appendChild(worktd3);


let workul1 = document.createElement('ul');
worktd3.appendChild(workul1);

let work1li1 = document.createElement('li');
workul1.appendChild(work1li1);
let work1li1text = document.createTextNode("Lead and execute all phases of event planning and production spaning commite recuirement, training, vender relationship and on-site facilization");
work1li1.appendChild(work1li1text);

let work1li1br1 = document.createElement('br');
workul1.appendChild(work1li1br1);

let work1li2 = document.createElement('li');
workul1.appendChild(work1li2);
let work1li2text = document.createTextNode("Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the state department summit on the Middle East and the companiest largest civic event to date ,the United State of Women.");
work1li2.appendChild(work1li2text);



let work1li2br2 = document.createElement('br');
workul1.appendChild(work1li2br2);

let work1li3 = document.createElement('li');
workul1.appendChild(work1li3);
let work1li3text = document.createTextNode(" Exercise fiscal control over budget creation, tracking and reporting.collaborarte with Emoloyees at all organization levels to advanced cohensive operations.");
work1li3.appendChild(work1li3text);

let work1li3br3 = document.createElement('br');
workul1.appendChild(work1li3br3);

//work experience 2

let work2 = document.createElement('div');
work2.className='work2';
document.querySelector("body").appendChild(work2);

let work2head = document.createElement('h3');
work2.appendChild(work2head);
let work2icon = document.createElement('i');
work2icon.className='fas fa-award icon';
work2head.appendChild(work2icon);
let work2text = document.createTextNode('Work Experience');
work2head.appendChild(work2text);

let wx = document.createElement("div");
wx.className='wx';
work2.appendChild(wx);

let worktab2 = document.createElement('table');
wx.appendChild(worktab2);

let work2tr1 = document.createElement('tr');
worktab2.appendChild(work2tr1);

let work2td1 = document.createElement('td');
work2tr1.appendChild(work2td1);

let comh4 = document.createElement('h4');
work2td1.appendChild(comh4);
let comh4text = document.createTextNode("Communication Relations");
comh4.appendChild(comh4text);

let work2td2 = document.createElement('td');
work2tr1.appendChild(work2td2);
let comdate = document.createTextNode('06/2011-04/2014');
work2td2.appendChild(comdate);

let work2tr2 =document.createElement('tr');
worktab2.appendChild(work2tr2);
let manbold = document.createElement('b');
work2tr2.appendChild(manbold);
let work2tr2text = document.createTextNode('Manager');
manbold.appendChild(work2tr2text);

let work2tr3 =document.createElement('tr');
worktab2.appendChild(work2tr3);
let work2tr3text = document.createTextNode("Gay & Lesbian Elder Housing,Los Angeles");
work2tr3.appendChild(work2tr3text);

let work2tr4 = document.createElement('tr');
worktab2.appendChild(work2tr4);

let work2td4 = document.createElement('td');
work2tr4.appendChild(work2td4);
let work2ul1 = document.createElement('ul');
work2td4.appendChild(work2ul1);

let work2li1 = document.createElement('li');
work2ul1.appendChild(work2li1);
let work2li1text = document.createTextNode(" Arranging presentation and pitch deck.");
work2li1.appendChild(work2li1text);



let work2li2 = document.createElement('li');
work2ul1.appendChild(work2li2);
let work2li2text = document.createTextNode(" Designing a PR plan and estsblishment important focus points.");
work2li2.appendChild(work2li2text);



let work2li3 = document.createElement('li');
work2ul1.appendChild(work2li3);
let work2li3text = document.createTextNode("Designing,creation and managing content across multiple communication platforms.");
work2li3.appendChild(work2li3text);


let work2li4 = document.createElement('li');
work2ul1.appendChild(work2li4);
let work2li4text = document.createTextNode("  Building relationships with key media players. ");
work2li4.appendChild(work2li4text);

let work2li4br4 = document.createElement('br');
work2ul1.appendChild(work2li4br4);

//education

let education = document.createElement("div");
education.className='edu';
document.querySelector("body").appendChild(education);

let eduh3 = document.createElement('h3');
education.appendChild(eduh3);
let eduicon = document.createElement('i');
eduicon.className='fas fa-graduation-cap'
eduh3.appendChild(eduicon);

let edutext = document.createTextNode("Education");
eduh3.appendChild(edutext);

let educat = document.createElement('div');
educat.className='ei';
document.querySelector('body').appendChild(educat);

let edutab = document.createElement('table');
educat.appendChild(edutab);

let edutr1 = document.createElement('tr');
edutab.appendChild(edutr1);

let edutd1 = document.createElement('td');
edutr1.appendChild(edutd1);

let edutd1bold = document.createElement('b');
edutd1.appendChild(edutd1bold);

let edutext1 = document.createTextNode("Educational immersion");
edutd1bold.appendChild(edutext1);

let edutd2 = document.createElement('td');
edutr1.appendChild(edutd2);

let edutext2 = document.createTextNode("11/2018-06/2018");
edutd2.appendChild(edutext2);

let edutr2 = document.createElement('tr');
edutab.appendChild(edutr2);

let edutd3 = document.createElement('td');
edutr2.appendChild(edutd3);
let edutd3bold = document.createElement('b');
edutd3.appendChild(edutd3bold);
let edutext3 = document.createTextNode("Program");
edutd3bold.appendChild(edutext3);

let edutr3 = document.createElement('tr');
edutab.appendChild(edutr3);

let edutd4 = document.createElement('td');
edutr3.appendChild(edutd4);

let edutext4 = document.createTextNode("Think, Chicago, IL");
edutd4.appendChild(edutext4);

let edutr4 = document.createElement('tr');
edutab.appendChild(edutr4);

let edutd5 = document.createElement('td');
edutr4.appendChild(edutd5);

let edutext5 = document.createTextNode("Project-focused intensive program with emphasis on Mango,Express ,React, and Javascript (MERN) technical stack.");
edutd5.appendChild(edutext5);

let edutr5 = document.createElement('tr');
edutab.appendChild(edutr5);

let edutd6 = document.createElement('td');
edutr5.appendChild(edutd6);

let eduul = document.createElement('ul');
edutd6.appendChild(eduul);

let eduli1 = document.createElement('li');
eduul.appendChild(eduli1);

let eduli1text1 = document.createTextNode("Developer a Full-stack web application ,using React that allows users to explore various aspects of meditation.User's progess is stored on a backend created using node MongoDB.")
eduli1.appendChild(eduli1text1);

let edubr1 = document.createElement('br');
eduul.appendChild(edubr1);

let eduli2 = document.createElement('li');
eduul.appendChild(eduli2);

let eduli2text2 = document.createTextNode(" Developed a language learning app, foodie Phonetics using spaced repetition and a linked list data structure.React was used to create the front end components while Node and Mango were used to create a backend that stores data.");
eduli2.appendChild(eduli2text2);

let edubr2 = document.createElement('br');
eduul.appendChild(edubr2);

let eduli3 = document.createElement('li');
eduul.appendChild(eduli3);

let eduli3text3 = document.createTextNode("Developed a concierge app pley, for individuals looking for curated suggestions when visiting a new place.React was used to develop the front end which includes real time chat, drag and drop and variety of advanced feature. The backend, built using node,Express and Mongo,takes advantage of well-developed RESTful API, Geospatial serching,and user autentication with JWT.");
eduli3.appendChild(eduli3text3);

let edubr3 = document.createElement('br');
eduul.appendChild(edubr3);



let degtr1 = document.createElement('tr');
eduul.appendChild(degtr1);

let degtd1 = document.createElement('td');
degtr1.appendChild(degtd1);

let degbold = document.createElement('b');
degtd1.appendChild(degbold);

let degtext1 = document.createTextNode("BA, English");
degbold.appendChild(degtext1);

let degtd2 = document.createElement('td');
degtr1.appendChild(degtd2);
let degtext2 = document.createTextNode("09/2001-09/2005");
degtd2.appendChild(degtext2);

let degtr2 = document.createElement('tr');
eduul.appendChild(degtr2);

let degtext3 = document.createTextNode("University of California,Los Angles");
degtr2.appendChild(degtext3);

let hr2 = document.createElement('hr');
hr2.className='h';
document.querySelector('body').appendChild(hr2);

















