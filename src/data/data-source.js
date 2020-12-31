import sidearms from './sidearms.js';

class DataSource {
    static searchArm(keyword) {
        return new Promise((resolve, reject) => {
            const filteredArms = sidearms.filter(sidearm => sidearm.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filtered.length) {
                resolve(filteredArms);
            } else {
                reject(`${keyword} not found !`);
            }
        });
    }
}
export default DataSource;