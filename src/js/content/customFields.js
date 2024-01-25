function setCustomFields() {
    setTimeout(() => {
        let partnerField = document.querySelector('#custom-partner');
        let ticketTypeField = document.querySelector('#custom-ticket-type');
        let slaField = document.querySelector('#custom-sla');
        let departmentField = document.querySelector('#custom-department');
        let divisionField = document.querySelector('#custom-division');

        let propertiesDiv = document.querySelector('#properties');
    
        let division = propertiesDiv.querySelector('#property-label-division + span > span').textContent.toLowerCase()
    
        divisionField.querySelectorAll('option').forEach(option => {
            let optionText = option.textContent.toLowerCase()
            if (optionText === division) {
                // option.selected = true 
                divisionField.value = option.value
                divisionField.classList.toggle('unselected')
                console.log('TRUE!!!');
            } else {
                // option.selected = false
            }
            console.log('Option:', optionText, '||', 'Division:', division)
        })
    
    }, 800)
}
