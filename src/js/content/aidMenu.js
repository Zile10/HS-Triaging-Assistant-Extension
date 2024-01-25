let draggedEl;
let isDragging = false;

let offsetX = null;
let offsetY = null;

function main() {
    // 'use strict';
    setTimeout(() => {
        // clearTicketData()
        // setTicketData()
        createAidMenu()
        addListeners()
    }, 700)
};

function createAidMenu() {
    let body = document.querySelector('body');
    let aidMenu = document.createElement('div');
    aidMenu.id = 'aid-menu';

    // HTML
    aidMenu.innerHTML = `
        <div id="aid-menu-backdrop"></div>

        <div id="menu-content">
            <div class="menu-dragger">
            
            </div>

            <div class="menu-list">
                <div class="menu-item">
                    <img name="mode" src="https://d7umqicpi7263.cloudfront.net/img/product/cc327a9e-40b5-4a06-b4d9-1d97db5ff7d3/a5f32db2-d1b5-401d-be77-509035bea783.png">
                    <label for="mode">Mode</label>

                    <div class="selection">
                        <div class="heading"> <span></span> <div>Partner Specific</div> <span></span> </div>
                        <a href="https://app.mode.com/afresh/reports/97d25e4dad56" target="_blank">Alb Triage Dashboard</a>
                        <a href="https://app.mode.com/afresh/reports/f317d3c43307" target="_blank">Cub - Order Guide Inquiries</a>
                        <a href="https://app.mode.com/afresh/reports/fdfbe96fb040" target="_blank">Bas - Order Guide Inquiries</a>

                        <div class="heading"> <span></span> <div>Recommendations</div> <span></span> </div>
                        <a href="https://app.mode.com/afresh/reports/b6c86d0d99b2" target="_blank">Rec Quality Dashboard</a>
                        <a href="https://app.mode.com/afresh/reports/7e4ebc0d9bc7" target="_blank">Rec Coverage Triage</a>

                        <div class="heading"> <span></span> <div>Other</div> <span></span> </div>
                        <a href="https://app.mode.com/afresh/reports/a8420e19a2f2" target="_blank">Category Change Validator</a>
                    </div>
                </div>

                <div class="menu-item">
                    <img name="playbook" src="https://cdn.iconscout.com/icon/free/png-256/free-notion-2296040-1911999.png?f=webp">
                    <label for="playbook">Notion</label>
                    <div class="selection">
                        <input class="playbook-search" type="text" placeholder="Search...">
                        <div id="search-results"></div>
                    </div>
                </div>

                <div class="menu-item">
                    <img name="slack" src="https://static-00.iconduck.com/assets.00/slack-icon-512x511-udpsz3x6.png">
                    <label for="slack">Slack</label>
                    <div class="selection">
                        <h5>Slack Channels:</h5>
                    </div>
                </div>
            
            </div>
        </div>
    `
    styleAidMenu();
    body.appendChild(aidMenu);
    displayPlaybooks('')

    let searchInput = document.querySelector('.playbook-search');
    searchInput.addEventListener('keyup', () => {
        displayPlaybooks(searchInput.value.toLowerCase())
    })
}

function styleAidMenu() {
    let head = document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';

    // Variables
    let bdBlur = '5px';
    let menuWidth = 50;

    // Styling
    style.innerHTML = `
        
    `
    head.appendChild(style);
}

function displayPlaybooks(query) {
    let resultsDiv = document.querySelector('#search-results');
    let results = searchPlaybooks(query);
    resultsDiv.innerHTML = '';

    results.forEach((pb) => {
        resultsDiv.innerHTML += `
            <a href="${pb.src}" target="_blank">${pb.name}</a>
        `
    })
}

function searchPlaybooks(query) {
    let playbooks = [
        {
            name: 'app is down, unresponsive, inaccessible',
            src: 'https://www.notion.so/afresh/app-is-down-unresponsive-inaccessible-777a4e9dcbd041edb1a0830a856a73da',
        },

        {
            name: 'new store can’t login for the first time',
            src: 'https://www.notion.so/new-store-can-t-login-for-the-first-time-53225941f9b14e8a988070b93f52557b?pvs=21',
        },

        {
            name: 'store cannot open the Afresh app or submit the order',
            src: 'https://www.notion.so/store-cannot-open-the-Afresh-app-or-submit-the-order-3617933a04dc4b2c83bacc475d4b27d5?pvs=21',
        },

        {
            name: 'store can’t update app to the latest version',
            src: 'https://www.notion.so/store-can-t-update-app-to-the-latest-version-b1b59dfc7ca3417b81cd8d228a3fb2f2?pvs=2}1',
        },

        {
            name: 'store forgot their password & can’t login ',
            src: 'https://www.notion.so/store-forgot-their-password-can-t-login-d0ec9ff2e74045a8a6f01edb1ca7cb8c?pvs=21',
        },

        {
            name: 'store placed an order when the workflow shouldn’t have been available',
            src: 'https://www.notion.so/store-placed-an-order-when-the-workflow-shouldn-t-have-been-available-31c8fedf76e0405ebc1cdb9c0f4d2ada?pvs=21',
        },

        {
            name: 'store sees ‘coming soon’ for a workflow that should be open',
            src: 'https://www.notion.so/store-sees-coming-soon-for-a-workflow-that-should-be-open-00b5ae412df742b69e8ed151111ce1c9?pvs=21',
        },

        {
            name: 'Doc Title- Use this template!',
            src: 'https://www.notion.so/Doc-Title-Use-this-template-a614a2366e5c46888ef3ab38103f8aa0?pvs=21',
        },

        {
            name: 'corporate portal- ‘no SSO user found for login’ error',
            src: 'https://www.notion.so/corporate-portal-no-SSO-user-found-for-login-error-cc5e2c15ed954a2caccda71f784ee8db?pvs=21',
        },
        {
            name: 'case size is wrong',
            src: 'https://www.notion.so/case-size-is-wrong-145a430225d64d41a42c587a03c07225?pvs=21',
        },
        {
            name: 'Item overmapping/undermapping',
            src: 'https://www.notion.so/Item-overmapping-undermapping-2e460d26950e43f18355c8adacae18c6?pvs=21',
        },
        {
            name: 'ads / TPRs / promos are missing',
            src: 'https://www.notion.so/ads-TPRs-promos-are-missing-12bce4c36bee40288ffdb58288588e6c?pvs=21',
        },
        {
            name: 'Doc Title- Use this template!',
            src: 'https://www.notion.so/Doc-Title-Use-this-template-c003fbf0aa114536b07500082cfe76e2?pvs=21',
        },
        {
            name: 'case cost is wrong',
            src: 'https://www.notion.so/case-cost-is-wrong-7367cd9754bf4d829f972038b686be78?pvs=21',
        },
        {
            name: 'category is in the wrong order or has the wrong name',
            src: 'https://www.notion.so/category-is-in-the-wrong-order-or-has-the-wrong-name-bff3028d78cc41a7bec545769cff0548?pvs=21',
        },
        {
            name: 'floor capacity wrong or missing',
            src: 'https://www.notion.so/floor-capacity-wrong-or-missing-ecc906376d3d40e5bc8741afdfacc919?pvs=21',
        },
        {
            name: 'floor display change date is wrong',
            src: 'https://www.notion.so/floor-display-change-date-is-wrong-e008c95853dd4a9382d095ec02cc47de?pvs=21',
        },
        {
            name: 'item has wrong case UOM (each vs case)',
            src: 'https://www.notion.so/item-has-wrong-case-UOM-each-vs-case-41f21c4bd816468cad7a7421ded68609?pvs=21',
        },
        {
            name: 'item is in the wrong workflow',
            src: 'https://www.notion.so/item-is-in-the-wrong-workflow-ab47fbc419384b47b21a9a65ed5540e2?pvs=21',
        },
        {
            name: 'item is in wrong category/tab ',
            src: 'https://www.notion.so/item-is-in-wrong-category-tab-d4e3a66f99a940b39b6764f875053b3c?pvs=21',
        },
        {
            name: 'item is missing from the order guide OR item should be removed from the order guide/app',
            src: 'https://www.notion.so/item-is-missing-from-the-order-guide-OR-item-should-be-removed-from-the-order-guide-app-3629f292bb2d4f72a467d12cf8be3110?pvs=21',
        },
        {
            name: 'item is/isn\'t blocked in the app ',
            src: 'https://www.notion.so/item-is-isn-t-blocked-in-the-app-9b6592f320864c66ae957ace3e26c5b5?pvs=21',
        },
        {
            name: 'item not showing up as Tasteful Rewards',
            src: 'https://www.notion.so/item-not-showing-up-as-Tasteful-Rewards-ee022e38593c40b598465e6014f35216?pvs=21',
        },
        {
            name: 'item shows as on sale in app, but actually isn\'t',
            src: 'https://www.notion.so/item-shows-as-on-sale-in-app-but-actually-isn-t-97d0a3f315604bd4954d5f90c1aad0e1?pvs=21',
        },
        {
            name: 'low demand/movement',
            src: 'https://www.notion.so/low-demand-movement-ea50c61ae68f4830b6a4c7cd069b7b55?pvs=21',
        },
        {
            name: 'Meat item/vendor/Workflow not appearing in OG, not categorized/categorized incorrectly',
            src: 'https://www.notion.so/Meat-item-vendor-Workflow-not-appearing-in-OG-not-categorized-categorized-incorrectly-f7cae0860cc44668bcb0d6343710edba?pvs=21',
        },
        {
            name: 'store doesn’t see workflow 2.0 enabled',
            src: 'https://www.notion.so/store-doesn-t-see-workflow-2-0-enabled-97d8805952084badb28ba8c99e9f5cbb?pvs=21',
        },
        {
            name: 'store is requesting a different item to be the primary',
            src: 'https://www.notion.so/store-is-requesting-a-different-item-to-be-the-primary-85cbde62dfce49bfa68e3162c8ee88d8?pvs=21',
        },
        {
            name: 'Store reports price is wrong ',
            src: 'https://www.notion.so/Store-reports-price-is-wrong-e6332028657e41a1aecdc55bfd12bc5a?pvs=21',
        },
        {
            name: 'store wants to add Off Guide item to OG',
            src: 'https://www.notion.so/store-wants-to-add-Off-Guide-item-to-OG-142e63f7654944e7a6601f2118f42a1b?pvs=21',
        },
        {
            name: 'temporary ad week change request',
            src: 'https://www.notion.so/temporary-ad-week-change-request-bed97329a818451a89b6389397c31689?pvs=21',
        },
        {
            name: 'workflow 2.0- required checks screen missing all items or showing too many',
            src: 'https://www.notion.so/workflow-2-0-required-checks-screen-missing-all-items-or-showing-too-many-1a3e9ecd2b2d47b38431fc5af81e61ab?pvs=21',
        },
        {
            name: 'workflow 2.0- item is in the wrong part of the workflow',
            src: 'https://www.notion.so/workflow-2-0-item-is-in-the-wrong-part-of-the-workflow-7965fcbc3e2e4610b18054258f4b919c?pvs=21',
        },
        {
            name: '\'Afresh Order Notice\' Afresh Order: AF###### will not be placed. (Store placed dual orders on  Afresh and AS400.)',
            src: 'https://www.notion.so/Afresh-Order-Notice-Afresh-Order-AF-will-not-be-placed-Store-placed-dual-orders-on-Afresh-bab7a7b1bb9044948c61d39eee75ec9c?pvs=21',
        },
        {
            name: '\'Afresh Order Notice\' AS400 order already exists (Cold Start Load)',
            src: 'https://www.notion.so/Afresh-Order-Notice-AS400-order-already-exists-Cold-Start-Load-5e1550b3b919461c913b545e9dc761b4?pvs=21',
        },
        {
            name: '\'Afresh Order Notice\' error moving [x file] to history folder',
            src: 'https://www.notion.so/Afresh-Order-Notice-error-moving-x-file-to-history-folder-4c29c0ad869e445c93b3e97f968b7356?pvs=21',
        },
        {
            name: 'store placed an order when the workflow shouldn’t have been available',
            src: 'https://www.notion.so/store-placed-an-order-when-the-workflow-shouldn-t-have-been-available-31c8fedf76e0405ebc1cdb9c0f4d2ada?pvs=21',
        },
        {
            name: 'store sees ‘coming soon’ for a workflow that should be open',
            src: 'https://www.notion.so/store-sees-coming-soon-for-a-workflow-that-should-be-open-00b5ae412df742b69e8ed151111ce1c9?pvs=21',
        },
        {
            name: 'Cold Start Load',
            src: 'https://www.notion.so/Cold-Start-Load-6cda465726ac4680aff3d60ce6038259?pvs=21',
        },
        {
            name: 'FT meat order \'partially submitted\' error',
            src: 'https://www.notion.so/FT-meat-order-partially-submitted-error-2ee9bb24748947e08292a717b948e6bd?pvs=21',
        },
        {
            name: 'order not placed, deadline has long passed',
            src: 'https://www.notion.so/order-not-placed-deadline-has-long-passed-ece0f800cd374377ae3e4aa09230dd01?pvs=21',
        },
        {
            name: 'SFTP issue and/or order submitted but IT/DC didn\'t receive it',
            src: 'https://www.notion.so/SFTP-issue-and-or-order-submitted-but-IT-DC-didn-t-receive-it-16e0eb0be01546aa9bc9b8dd0717e7d6?pvs=21',
        },
        {
            name: 'order was submitted early by accident',
            src: 'https://www.notion.so/order-was-submitted-early-by-accident-0e774f44467a4db8a5c131980fb17ef6?pvs=21',
        },
        {
            name: 'store accidentally submitted 2 orders (2 iPads used)',
            src: 'https://www.notion.so/store-accidentally-submitted-2-orders-2-iPads-used-49f02fc0cda747b9a834cd83a3036c62?pvs=21',
        },
        {
            name: 'store reports order was placed early by itself (not auto-place) or entered amounts deleted',
            src: 'https://www.notion.so/store-reports-order-was-placed-early-by-itself-not-auto-place-or-entered-amounts-deleted-a945636900144261961b3752fbfc6b44?pvs=21',
        },
        {
            name: 'WC \'Afresh Order Notice\' a default order will be placed',
            src: 'https://www.notion.so/WC-Afresh-Order-Notice-a-default-order-will-be-placed-42b529dd3a914b78b248e75a31d9545a?pvs=21',
        },
        {
            name: 'Item has a rec and it shouldn’t (ingredient items)',
            src: 'https://www.notion.so/Item-has-a-rec-and-it-shouldn-t-ingredient-items-fdd945aa6be74bb0907e215fa08f8a37?pvs=21',
        },
        {
            name: 'Item recommendation is too low or too high',
            src: 'https://www.notion.so/Item-recommendation-is-too-low-or-too-high-b12526a899bc46bbaf074e0ecbbd9db9?pvs=21',
        },
        {
            name: 'recommendations are missing for one or more items',
            src: 'https://www.notion.so/recommendations-are-missing-for-one-or-more-items-671e086d97134b09a1b04e05661d0465?pvs=21',
        },
        {
            name: 'Distros and/or planned shipments are missing or wrong',
            src: 'https://www.notion.so/Distros-and-or-planned-shipments-are-missing-or-wrong-2def03eb55d74ed2966f163c5a3efe11?pvs=21',
        },
        {
            name: 'bad weather resulted in no delivery',
            src: 'https://www.notion.so/bad-weather-resulted-in-no-delivery-a8759a831ad8482b91642be809863340?pvs=21',
        },
        {
            name: 'mis-pick (item received does not match item on invoice)',
            src: 'https://www.notion.so/mis-pick-item-received-does-not-match-item-on-invoice-01301e3d19474a20a1f637125ee8310d?pvs=21',
        },
        {
            name: 'WIP-Shipments, shorts, and/or pushes are missing or wrong',
            src: 'https://www.notion.so/WIP-Shipments-shorts-and-or-pushes-are-missing-or-wrong-566782a109fc4569bb7c22bd326c7f9f?pvs=21',
        },
        {
            name: 'shorts / pushes / shipments / distros are missing or wrong',
            src: 'https://www.notion.so/shorts-pushes-shipments-distros-are-missing-or-wrong-f886ce8f322f46b9be1b383fb26924f4?pvs=21',
        },
        {
            name: 'duplicate shipment reported for one or multiple items',
            src: 'https://www.notion.so/duplicate-shipment-reported-for-one-or-multiple-items-76cf820877124668a6dca254d7b33885?pvs=21',
        },
        {
            name: 'auto-inventory amount is off/wrong, missing',
            src: 'https://www.notion.so/auto-inventory-amount-is-off-wrong-missing-ce7f7515faf34fb2a621c17ca3964572?pvs=21',
        },
        {
            name: '"confirm inventory total" app error',
            src: 'https://www.notion.so/confirm-inventory-total-app-error-4c2673ce2bb844118dfb956fc6c64297?pvs=21',
        },
        {
            name: '"undefined network error" app error',
            src: 'https://www.notion.so/undefined-network-error-app-error-610240d64c8d4cb4bbf1d244f29a4c7c?pvs=21',
        },

        {
            name: 'SSOG monitoring process for ALB',
            src: 'https://www.notion.so/SSOG-monitoring-process-for-ALB-5e68583b27a746389d8a8e86a036f63d?pvs=21',
        },
        {
            name: '“missing shipment data" app banner error',
            src: 'https://www.notion.so/missing-shipment-data-app-banner-error-6308e4397c3f4c1bb241d56c6aa1856b?pvs=21',
        },
        {
            name: '“reloading your order with fresh data”',
            src: 'https://www.notion.so/reloading-your-order-with-fresh-data-411e03a9346c444d83c8b4d3a4e46b11?pvs=21',
        },
        {
            name: 'Unexpected inventory/override requests',
            src: 'https://www.notion.so/Unexpected-inventory-override-requests-97d4247120df49758c11944263bedf41?pvs=21',
        },
        {
            name: 'Alerts Monitoring-General',
            src: 'https://www.notion.so/Alerts-Monitoring-General-cb5e0d3dd47e4ccaac81139cc97c6ba6?pvs=21',
        },
        {
            name: 'Heinens File Monitoring Alerts',
            src: 'https://www.notion.so/Heinens-File-Monitoring-Alerts-44efcd283afc4fa99d56921b0b34137a?pvs=21',
        },
        {
            name: 'BAS File Monitoring Alerts-WIP',
            src: 'https://www.notion.so/BAS-File-Monitoring-Alerts-WIP-fd34a0f2ac754c849cdbd363f117379a?pvs=21',
        },
        {
            name: 'SAF File Monitoring Alerts-WIP',
            src: 'https://www.notion.so/SAF-File-Monitoring-Alerts-WIP-77170bc4321c4e368acf9c4fcf6ef10f?pvs=21',
        },
        {
            name: 'future display size not showing in Store Setup',
            src: 'https://www.notion.so/future-display-size-not-showing-in-Store-Setup-2f899f8d6aba47678bb4f4ce6a88ed3c?pvs=21',
        },
        {
            name: 'PEI counts did not hydrate order',
            src: 'https://www.notion.so/PEI-counts-did-not-hydrate-order-bd21d8ea0def43feb7379a0c606e9397?pvs=21',
        },
        {
            name: 'corporate portal- ‘no SSO user found for login’ error',
            src: 'https://www.notion.so/corporate-portal-no-SSO-user-found-for-login-error-cc5e2c15ed954a2caccda71f784ee8db?pvs=21',
        }
    ]

    let results = []
    if (query.length > 0) {
        playbooks.forEach((pb) => {
            if (pb.name.toLowerCase().search(query) >= 0) {
                results.push(pb)
            }
        })
    } else {results = playbooks};
    return results;
}

function addListeners() {
    let aidMenu = document.querySelector('#aid-menu');
    let dragger = document.querySelector('#aid-menu .menu-dragger');

    let aidMenuCoords = JSON.parse(localStorage.getItem('aid-menu')) || null;
    if (aidMenuCoords) {
        aidMenu.style.left = JSON.parse(localStorage.getItem('aid-menu')).x
        aidMenu.style.top = JSON.parse(localStorage.getItem('aid-menu')).y
    } else {
        aidMenu.style.left = "0px";
        aidMenu.style.top = "0px";
    
    }

    dragger.addEventListener('mousedown', (e) => {
        draggedEl = aidMenu
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        isDragging = false;
    })
    
    document.addEventListener('mouseup', (e) => {
        if (draggedEl) {
            offsetX = null;
            offsetY = null;
            
            if (!isDragging) {
                draggedEl.classList.toggle('open')
            }
    
            draggedEl = null;
            isDragging = false
        }
    })
    
    document.addEventListener('mousemove', (e) => {
        if (draggedEl) {
            draggedEl.style.left = (e.clientX - offsetX) + 'px'
            draggedEl.style.top = (e.clientY - offsetY) + 'px'
    
            localStorage.setItem(`${draggedEl.id}`, JSON.stringify({x: draggedEl.style.left, y: draggedEl.style.top}))
            isDragging = true;
        }
    })
}