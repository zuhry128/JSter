import DataSource from '../data/data-source.js';
import '../components/SearchButton.js';
import '../components/ClubList.js';

const main = () => {
    const searchElement = document.querySelector("search-button");
    const armListElement = document.querySelector("side-list");

    const onButtonSearchClicked = () => {
        DataSource.searchArm(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        armListElement.sidearms = results;
    };

    const fallbackResult = (message) => {
        armListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;