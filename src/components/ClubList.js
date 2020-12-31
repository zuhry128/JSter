import './ClubItem.js';
class CLubList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set _SideArms(sidearm) {
        this._SideArms = sidearm;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>
        `;

        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._SideArms.forEach(sidearm => {
            const clubItemElement = document.querySelector("sidearm-item");
            clubItemElement.sidearm = sidearm
            this.shadowDOM.appendChild(clubItemElement);
        });
    }
}

customElements.define("side-list", CLubList);