import SideArms from './sidearms.js';

class DataSource {
    static SearchArm(keyword) {
        return new Promise((resolve, reject) => {
            const filtered = SideArms.filter(sidearm => sidearm.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filtered.length) {
                resolve(filtered);
            } else {
                reject(`${keyword} not found !`);
            }
        });
    }
}
export default DataSource;