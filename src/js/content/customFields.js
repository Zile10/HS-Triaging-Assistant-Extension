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
                option.selected = true
                changeEvent = new Event('change', { bubbles: true })
                divisionField.dispatchEvent(changeEvent)

            }
        })

        departmentField.querySelectorAll('option').forEach(option => {
            let optionText = option.textContent.toLowerCase()
            if ( ticketData.workflow.toLowerCase().includes(optionText) ) {
                // option.selected = true 
                option.selected = true
                changeEvent = new Event('change', { bubbles: true })
                departmentField.dispatchEvent(changeEvent)

            }
        })
    }, 800)
}
