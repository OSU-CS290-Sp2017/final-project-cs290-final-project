var CreateModal = document.getElementById('create-movie-modal');
var CreateButton = document.getElementById('create-movie-button');
var ModalClose = document.getElementsByClassName("modal-close-button")[0];
var ModalCancel = document.getElementsByClassName("modal-cancel-button")[0];
var ModalAccept = document.getElementsByClassName("modal-accept-button")[0];
var HiddenMovie = document.getElementsByClassName("hidden");
var ModalBack = document.getElementById('modal-backdrop');
var Name = document.getElementById('name-input');
var Description = document.getElementById('description-input');
var Picture = document.getElementById('picture-input');



var SearchMovie = document.getElementById('movie-search-input');

SearchMovie.oninput = function() {

  var name = document.querySelectorAll('.movie-name').length;
  var input = SearchMovie.value;

  for(var i =0; i < name; i++){

    console.log(input);
    console.log(name);

    if(document.getElementsByClassName('movie-name')[i].innerText.includes(input)) {
      document.getElementsByClassName('movie')[i].style.display='flex';
    }else {
      document.getElementsByClassName('movie')[i].style.display='none';
    }
  }
}
/**
document.getElementById('movie-search-input').setAttribute('oninput','searchmovie()');

function searchmovie(){

  var name = document.querySelectorAll('.movie-name').length;
  var input = document.getElementById('movie-search-input').value;

  for(var i =0; i < name ; i++) {
    if(document.getElementsByClassName('movie-name')[i].innerText.includes(input)) {
      document.getElementsByClassName('movie')[i].style.display="flex";
    }else {
      document.getElementsByClassName('movie')[i].style.display="none";
    }
  }
}
**/

CreateButton.onclick = function() {
	ModalBack.style.display = 'block';
	CreateModal.style.display = 'block';
}

var TheAvengers = document.getElementsByClassName("movie-name")[0];
var Caribbean = document.getElementsByClassName("movie-name")[1];
var aboutTime = document.getElementsByClassName("movie-name")[2];
var Inception = document.getElementsByClassName("movie-name")[3];
var Interstellar = document.getElementsByClassName("movie-name")[4];
var NowYouSeeMe = document.getElementsByClassName("movie-name")[5];
var TheNotebook = document.getElementsByClassName("movie-name")[6];
var Idiots = document.getElementsByClassName("movie-name")[7];

TheAvengers.onclick = function() {
	ModalBack.style.display = 'block';
	HiddenMovie[0].style.display = 'block';
}

Caribbean.onclick = function() {
	ModalBack.style.display = 'block';
	HiddenMovie[1].style.display = 'block';
}

aboutTime.onclick = function() {
 ModalBack.style.display = 'block';
 HiddenMovie[2].style.display = 'block';
}

Inception.onclick = function() {
 ModalBack.style.display = 'block';
 HiddenMovie[3].style.display = 'block';
}

Interstellar.onclick = function() {
 ModalBack.style.display = 'block';
 HiddenMovie[4].style.display = 'block';
}

NowYouSeeMe.onclick = function() {
 ModalBack.style.display = 'block';
 HiddenMovie[5].style.display = 'block';
}

TheNotebook.onclick = function() {
 ModalBack.style.display = 'block';
 HiddenMovie[6].style.display = 'block';
}

Idiots.onclick = function() {
 ModalBack.style.display = 'block';
 HiddenMovie[7].style.display = 'block';
}

ModalAccept.onclick = function() {

  var NewArticle=document.createElement('article');
  var NewDiv1=document.createElement('div');
  var NewImg=document.createElement('img');
  var NewDiv2=document.createElement('div');
  var NewP1=document.createElement('p');
  var NewP2=document.createElement('p');

	picture={};
	name={};
	description={};

	name = document.getElementById('name-input').value;
	description = document.getElementById('description-input').value;
	var picture = document.getElementById('picture-input').value;

	if(name!=="" && description!=="" && picture!=="") {

		var NewName = document.createTextNode(name);
		var NewDescription = document.createTextNode(description);

		NewImg.setAttribute('src', picture);

		NewArticle.classList.add('movie');
		NewDiv1.classList.add('movie-picture');
		NewImg.classList.add('movie-img');
		NewDiv2.classList.add('text-content');
		NewP1.classList.add('movie-name');
		NewP2.classList.add('movie-explanation');

		NewP1.appendChild(NewName);
		NewP2.appendChild(NewDescription);

		NewDiv1.appendChild(NewImg);

		NewDiv2.appendChild(NewP1);
		NewDiv2.appendChild(NewP2);

		NewArticle.appendChild(NewDiv1);
		NewArticle.appendChild(NewDiv2);

		document.body.childNodes[3].appendChild(NewArticle);
		CreateModal.style.display = 'none';
		ModalBack.style.display = 'none';

		Name.value = "";
		Description.value = "";
		Picture.value="";
	}
	else{
		alert("You did not enter Movie Name, Description or Picture Url!");
	}
}

var TheAvengersClose = document.getElementsByClassName("close-button")[0];
var CaribbeabClose = document.getElementsByClassName("close-button")[1];
var aboutTimeClose = document.getElementsByClassName("close-button")[2];
var InceptionClose = document.getElementsByClassName("close-button")[3];
var InterstellarClose = document.getElementsByClassName("close-button")[4];
var NowYouSeeMeClose = document.getElementsByClassName("close-button")[5];
var TheNotebookClose = document.getElementsByClassName("close-button")[6];
var IdiotsClose = document.getElementsByClassName("close-button")[7];

TheAvengersClose.onclick = function() {
	ModalBack.style.display = 'none';
  HiddenMovie[0].style.display = 'none';
}

CaribbeabClose.onclick = function() {
	ModalBack.style.display = 'none';
  HiddenMovie[1].style.display = 'none';
}

aboutTimeClose.onclick = function() {
	ModalBack.style.display = 'none';
  HiddenMovie[2].style.display = 'none';
}

InceptionClose.onclick = function() {
	ModalBack.style.display = 'none';
  HiddenMovie[3].style.display = 'none';
}

InterstellarClose.onclick = function() {
	ModalBack.style.display = 'none';
  HiddenMovie[4].style.display = 'none';
}

NowYouSeeMeClose.onclick = function() {
	ModalBack.style.display = 'none';
  HiddenMovie[5].style.display = 'none';
}

TheNotebookClose.onclick = function() {
	ModalBack.style.display = 'none';
  HiddenMovie[6].style.display = 'none';
}

IdiotsClose.onclick = function() {
	ModalBack.style.display = 'none';
  HiddenMovie[7].style.display = 'none';
}

function cancel() {

	CreateModal.style.display = 'none';
	ModalBack.style.display = 'none';

	Name.value = "";
	Description.value = "";
	Picture.value="";
}

ModalClose.addEventListener('click',cancel);
ModalCancel.addEventListener('click',cancel);
