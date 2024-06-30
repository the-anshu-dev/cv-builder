// regex for validation
const strRegex =  /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;

const mainForm = document.getElementById('cv-form');
const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
}

// user inputs elements
let firstnameElem = mainForm.firstname,
    middlenameElem = mainForm.middlename,
    lastnameElem = mainForm.lastname,
    imageElem = mainForm.image,
    designationElem = mainForm.designation,
    addressElem = mainForm.address,
    emailElem = mainForm.email,
    phonenoElem = mainForm.phoneno,
    summaryElem = mainForm.summary;

// display elements theme Zer0
let nameDsp = document.getElementById('fullname_dsp'),
    imageDsp = document.getElementById('image_dsp'),
    phonenoDsp = document.getElementById('phoneno_dsp'),
    emailDsp = document.getElementById('email_dsp'),
    addressDsp = document.getElementById('address_dsp'),
    designationDsp = document.getElementById('designation_dsp'),
    summaryDsp = document.getElementById('summary_dsp'),
    projectsDsp = document.getElementById('projects_dsp'),
    achievementsDsp = document.getElementById('achievements_dsp'),
    skillsDsp = document.getElementById('skills_dsp'),
    educationsDsp = document.getElementById('educations_dsp'),
    experiencesDsp = document.getElementById('experiences_dsp');



// display elements theme ONE
    let nameDsp1 = document.getElementById('fullname_dsp1'),
    imageDsp1 = document.getElementById('image_dsp1'),
    phonenoDsp1 = document.getElementById('phoneno_dsp1'),
    emailDsp1 = document.getElementById('email_dsp1'),
    addressDsp1 = document.getElementById('address_dsp1'),
    designationDsp1 = document.getElementById('designation_dsp1'),
    summaryDsp1 = document.getElementById('summary_dsp1'),
    projectsDsp1 = document.getElementById('projects_dsp1'),
    achievementsDsp1 = document.getElementById('achievements_dsp1'),
    skillsDsp1 = document.getElementById('skills_dsp1'),
    educationsDsp1 = document.getElementById('educations_dsp1'),
    experiencesDsp1 = document.getElementById('experiences_dsp1');




    
// display elements theme TWO
let nameDsp2 = document.getElementById('fullname_dsp2'),
imageDsp2 = document.getElementById('image_dsp2'),
phonenoDsp2 = document.getElementById('phoneno_dsp2'),
emailDsp2 = document.getElementById('email_dsp2'),
addressDsp2 = document.getElementById('address_dsp2'),
designationDsp2 = document.getElementById('designation_dsp2'),
summaryDsp2 = document.getElementById('summary_dsp2'),
projectsDsp2 = document.getElementById('projects_dsp2'),
achievementsDsp2 = document.getElementById('achievements_dsp2'),
skillsDsp2 = document.getElementById('skills_dsp2'),
educationsDsp2 = document.getElementById('educations_dsp2'),
experiencesDsp2 = document.getElementById('experiences_dsp2');






// display elements theme THREE
let nameDsp3 = document.getElementById('fullname_dsp3'),
imageDsp3 = document.getElementById('image_dsp3'),
phonenoDsp3 = document.getElementById('phoneno_dsp3'),
emailDsp3 = document.getElementById('email_dsp3'),
addressDsp3 = document.getElementById('address_dsp3'),
designationDsp3 = document.getElementById('designation_dsp3'),
summaryDsp3 = document.getElementById('summary_dsp3'),
projectsDsp3 = document.getElementById('projects_dsp3'),
achievementsDsp3 = document.getElementById('achievements_dsp3'),
skillsDsp3 = document.getElementById('skills_dsp3'),
educationsDsp3 = document.getElementById('educations_dsp3'),
experiencesDsp3 = document.getElementById('experiences_dsp3');






// display elements theme FOUR
let nameDsp4 = document.getElementById('fullname_dsp4'),
imageDsp4 = document.getElementById('image_dsp4'),
phonenoDsp4 = document.getElementById('phoneno_dsp4'),
emailDsp4 = document.getElementById('email_dsp4'),
addressDsp4 = document.getElementById('address_dsp4'),
designationDsp4 = document.getElementById('designation_dsp4'),
summaryDsp4 = document.getElementById('summary_dsp4'),
projectsDsp4 = document.getElementById('projects_dsp4'),
achievementsDsp4 = document.getElementById('achievements_dsp4'),
skillsDsp4 = document.getElementById('skills_dsp4'),
educationsDsp4 = document.getElementById('educations_dsp4'),
experiencesDsp4 = document.getElementById('experiences_dsp4');




















// first value is for the attributes and second one passes the nodelists
const fetchValues = (attrs, ...nodeLists) => {
    let elemsAttrsCount = nodeLists.length;
    let elemsDataCount = nodeLists[0].length;
    let tempDataArr = [];

    // first loop deals with the no of repeaters value
    for(let i = 0; i < elemsDataCount; i++){
        let dataObj = {}; // creating an empty object to fill the data
        // second loop fetches the data for each repeaters value or attributes 
        for(let j = 0; j < elemsAttrsCount; j++){
            // setting the key name for the object and fill it with data
            dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }

    return tempDataArr;
}

const getUserInputs = () => {

    // achivements 
    let achievementsTitleElem = document.querySelectorAll('.achieve_title'),
    achievementsDescriptionElem = document.querySelectorAll('.achieve_description');

    // experiences
    let expTitleElem = document.querySelectorAll('.exp_title'),
    expOrganizationElem = document.querySelectorAll('.exp_organization'),
    expLocationElem = document.querySelectorAll('.exp_location'),
    expStartDateElem = document.querySelectorAll('.exp_start_date'),
    expEndDateElem = document.querySelectorAll('.exp_end_date'),
    expDescriptionElem = document.querySelectorAll('.exp_description');

    // education
    let eduSchoolElem = document.querySelectorAll('.edu_school'),
    eduDegreeElem = document.querySelectorAll('.edu_degree'),
    eduCityElem = document.querySelectorAll('.edu_city'),
    eduStartDateElem = document.querySelectorAll('.edu_start_date'),
    eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date'),
    eduDescriptionElem = document.querySelectorAll('.edu_description');

    let projTitleElem = document.querySelectorAll('.proj_title'),
    projLinkElem = document.querySelectorAll('.proj_link'),
    projDescriptionElem = document.querySelectorAll('.proj_description');

    let skillElem = document.querySelectorAll('.skill');

    // event listeners for form validation
    firstnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'First Name'));
    middlenameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT_EMP, 'Middle Name'));
    lastnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Last Name'));
    phonenoElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.PHONENO, 'Phone Number'));
    emailElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.EMAIL, 'Email'));
    addressElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Address'));
    designationElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Designation'));

    achievementsTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    achievementsDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    expTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    expOrganizationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Organization')));
    expLocationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, "Location")));
    expStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'End Date')));
    expEndDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'End Date')));
    expDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    eduSchoolElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'School')));
    eduDegreeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Degree')));
    eduCityElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'City')));
    eduStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Start Date')));
    eduGraduationDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Graduation Date')));
    eduDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    projTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    projLinkElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Link')));
    projDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    skillElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'skill')));

    return {
        firstname: firstnameElem.value,
        middlename: middlenameElem.value,
        lastname: lastnameElem.value,
        designation: designationElem.value,
        address: addressElem.value,
        email: emailElem.value,
        phoneno: phonenoElem.value,
        summary: summaryElem.value,
        achievements: fetchValues(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
        experiences: fetchValues(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
        educations: fetchValues(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
        projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
        skills: fetchValues(['skill'], skillElem)
    }
};

function validateFormData(elem, elemType, elemName){
    // checking for text string and non empty string
    if(elemType == validType.TEXT){
        if(!strRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for only text string
    if(elemType == validType.TEXT_EMP){
        if(!strRegex.test(elem.value)) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for email
    if(elemType == validType.EMAIL){
        if(!emailRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for phone number
    if(elemType == validType.PHONENO){
        if(!phoneRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }

    // checking for only empty
    if(elemType == validType.ANY){
        if(elem.value.trim().length == 0) addErrMsg(elem, elemName);
        else removeErrMsg(elem);
    }
}

// adding the invalid text
function addErrMsg(formElem, formElemName){
    formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
}

// removing the invalid text 
function removeErrMsg(formElem){
    formElem.nextElementSibling.innerHTML = "";
}

// show the list data
const showListData = (listData, listContainer) => {
    listContainer.innerHTML = "";
    listData.forEach(listItem => {
        let itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');
        
        for(const key in listItem){
            let subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-val');
            subItemElem.innerHTML = `${listItem[key]}`;
            itemElem.appendChild(subItemElem);
        }

        listContainer.appendChild(itemElem);
    })
}

const displayCV = (userData) => {

    // Theme Zero 
    nameDsp.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname;
    phonenoDsp.innerHTML = userData.phoneno;
    emailDsp.innerHTML = userData.email;
    addressDsp.innerHTML = userData.address;
    designationDsp.innerHTML = userData.designation;
    summaryDsp.innerHTML = userData.summary;
    showListData(userData.projects, projectsDsp);
    showListData(userData.achievements, achievementsDsp);
    showListData(userData.skills, skillsDsp);
    showListData(userData.educations, educationsDsp);
    showListData(userData.experiences, experiencesDsp);


    // Theme One 
    nameDsp1.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname;
    phonenoDsp1.innerHTML = userData.phoneno;
    emailDsp1.innerHTML = userData.email;
    addressDsp1.innerHTML = userData.address;
    designationDsp1.innerHTML = userData.designation;
    summaryDsp1.innerHTML = userData.summary;
    showListData(userData.projects, projectsDsp1);
    showListData(userData.achievements, achievementsDsp1);
    showListData(userData.skills, skillsDsp1);
    showListData(userData.educations, educationsDsp1);
    showListData(userData.experiences, experiencesDsp1);


     // Theme Two 
     nameDsp2.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname;
     phonenoDsp2.innerHTML = userData.phoneno;
     emailDsp2.innerHTML = userData.email;
     addressDsp2.innerHTML = userData.address;
     designationDsp2.innerHTML = userData.designation;
     summaryDsp2.innerHTML = userData.summary;
     showListData(userData.projects, projectsDsp2);
     showListData(userData.achievements, achievementsDsp2);
     showListData(userData.skills, skillsDsp2);
     showListData(userData.educations, educationsDsp2);
     showListData(userData.experiences, experiencesDsp2);



      // Theme Three 
    nameDsp3.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname;
    phonenoDsp3.innerHTML = userData.phoneno;
    emailDsp3.innerHTML = userData.email;
    addressDsp3.innerHTML = userData.address;
    designationDsp3.innerHTML = userData.designation;
    summaryDsp3.innerHTML = userData.summary;
    showListData(userData.projects, projectsDsp3);
    showListData(userData.achievements, achievementsDsp3);
    showListData(userData.skills, skillsDsp3);
    showListData(userData.educations, educationsDsp3);
    showListData(userData.experiences, experiencesDsp3);




     // Theme Four 
     nameDsp4.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname;
     phonenoDsp4.innerHTML = userData.phoneno;
     emailDsp4.innerHTML = userData.email;
     addressDsp4.innerHTML = userData.address;
     designationDsp4.innerHTML = userData.designation;
     summaryDsp4.innerHTML = userData.summary;
     showListData(userData.projects, projectsDsp4);
     showListData(userData.achievements, achievementsDsp4);
     showListData(userData.skills, skillsDsp4);
     showListData(userData.educations, educationsDsp4);
     showListData(userData.experiences, experiencesDsp4);



}

// generate CV
const generateCV = () => {
    let userData = getUserInputs();
    displayCV(userData);
    console.log(userData);
}

function previewImage(){
    let oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function(ofEvent){
        imageDsp.src = ofEvent.target.result;
        imageDsp1.src = ofEvent.target.result;
        imageDsp2.src = ofEvent.target.result;
        imageDsp3.src = ofEvent.target.result;
        imageDsp4.src = ofEvent.target.result;
    }
}




// print CV
// const printbtn = document.getElementById('btn0');
// printbtn.addEventListener('click', function(){
//     print();
// })


function pr()
{
    var printwin = window.open("preview-sc0");
printwin.document.innerHTML(document.getElementById("preview-sc0").innerHTML);
printwin.print();
}



function prpr(){
    var print_div = document.getElementById("preview-sc0");
    var print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    print_area.document.close();
    print_area.focus();
    print_area.print();
    print_area.close();
            }





            function printSection(sectionId) {
                var printWindow = window.open('', '', 'width=600,height=600');
                var sectionToPrint = document.getElementById(sectionId).innerHTML;
                printWindow.document.open();
                printWindow.document.write('<html><head><title>Print Section</title></head><body>' + sectionToPrint + '</body></html>');
                printWindow.document.close();
                printWindow.print();
                printWindow.close();
              }
              


              function printIframeContent(sectionId) {
                var printFrame = document.getElementById('printFrame');
                var sectionToPrint = document.getElementById(sectionId).outerHTML;
                var printDocument = printFrame.contentDocument;
              
                printDocument.open();
                printDocument.write('<html><head><title>Print Section</title></head><body>' + sectionToPrint + '</body></html>');
                printDocument.close();
              
                printFrame.contentWindow.print();
              }
              





function demo123()
{
    

                 // JavaScript code for printing
                 const printButton = document.getElementById("print-button");
                 printButton.addEventListener("click", () => {
                     const printableSection = document.getElementById("printable-section");
                     const printWindow = window.open('', '', 'width=600,height=600');
                     printWindow.document.open();
                     printWindow.document.write('<html><head><title>Print</title></head><body>');
                     printWindow.document.write('<link rel="stylesheet" type="text/css" href="assets/css/main.css">'); // Link to external CSS file
                     printWindow.document.write(printableSection.innerHTML);
                     printWindow.document.write('</body></html>');
                     printWindow.document.close();
                     printWindow.onload = function () {
                         printWindow.print();
                         printWindow.onafterprint = function () {
                             printWindow.close();
                         };
                     };
                 });
}