//  date stamp to the footer
function addDateStamp() {
    const dateElement = document.getElementById('dateStamp');
    const currentDate = new Date();
    dateElement.textContent = `Date: ${currentDate.toLocaleDateString()}`;
}


window.onload = function() {
    addDateStamp();
};
