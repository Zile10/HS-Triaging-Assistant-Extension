let ticketData;

function clearTicketData() {
    ticketData = {
        url: location.href,
        issue: '',
        storeId: '',
        workflow: '',
        playbook: '',
        reply: '',
    }
}


function returnDataValue(string) {
    let startIndicies = []
    let endIndicies = []

    for (let i = 0; i < string.length; i ++) {
        if (string.slice(i, i + 5) == ':</b>') {
            startIndicies.push(i + 6)
            let tempIndex = i + string.slice(i, string.length - 1).indexOf('<br>')
            endIndicies.push(tempIndex)
        };
    }
    return {
        start: startIndicies,
        end: endIndicies
    }

}

function findTicketData(name) {
    // Grab the user's message'
    let msgBody = document.querySelectorAll('section.message > section.messageBody'); // Grabbing all the 'message body' Sections
    let msgContent = msgBody[msgBody.length - 1].innerHTML; // Taking the last 'message body' on the ticket and grabbing its contents
    let rawData = msgContent.slice(msgContent.indexOf('Reported at'), msgContent.length - 1); // Narrowing down the message content to just the data at the bottom

    // Setting Indicies
    let indArr = returnDataValue(rawData)
    let data = {
        reported: 0,
        by: 1,
        device: 2,
        version: 3,
        location: 4,
        customer: 5,
        orderGroup: 6,
        workflow: 7,
        workflowType: 8,
        store: 9,
        deadline: 10,
        timezone: 11,
    }

    return rawData.slice(indArr.start[data[name]], indArr.end[data[name]] )
}

function findPlaybooks() {
    let title = document.querySelector('#subjectLine') + ' '

    setTicketData()


}

function setTicketData() {
    ticketData = {
        url: location.href,
        issue: '',
        storeId: findTicketData('store'),
        workflow: findTicketData('workflow'),
        partner: findTicketData('customer'),
        playbook: '',
        reply: '',
    }
}
