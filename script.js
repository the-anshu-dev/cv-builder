
// JavaScript code for printing


// ZERO print   


const printButton = document.getElementById("print-button");
printButton.addEventListener("click", () => {
    const printableSection = document.getElementById("printable-section");
    const printWindow = window.open();
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="main.css">'); // Link to external CSS file
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




// ONE PRINT 


// JavaScript code for printing
const printButton1 = document.getElementById("print-button1");
printButton1.addEventListener("click", () => {
    const printableSection = document.getElementById("printable-section1");
    const printWindow = window.open();
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="main.css">'); // Link to external CSS file
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


// TWO PRINT 


// JavaScript code for printing
const printButton2 = document.getElementById("print-button2");
printButton2.addEventListener("click", () => {
    const printableSection = document.getElementById("printable-section2");
    const printWindow = window.open();
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="main.css">'); // Link to external CSS file
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


// THREE PRINT 


// JavaScript code for printing
const printButton3 = document.getElementById("print-button3");
printButton3.addEventListener("click", () => {
    const printableSection = document.getElementById("printable-section3");
    const printWindow = window.open();
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="main.css">'); // Link to external CSS file
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



// FOUR PRINT 



// JavaScript code for printing
const printButton4 = document.getElementById("print-button4");
printButton4.addEventListener("click", () => {
    const printableSection = document.getElementById("printable-section4");
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="main.css">'); // Link to external CSS file
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
4