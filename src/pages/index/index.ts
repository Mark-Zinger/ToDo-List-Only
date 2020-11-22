import { cpuUsage } from 'process';
import { getComponent } from '../../app/js/component';
import Header from '../../components/header/header';

const Index = {
    namespace: 'index',
    beforeEnter() {
        this.header = new Header(getComponent('header'));
    },
    enter() {
        // enter body 
    },
    afterEnter() {
        // afterEnter body
    },
    beforeLeave() {
        // beforeLeave body
    },
    leave() {
        // leave body
    },
    afterLeave() {
        // afterLeave body
    }
}

export default Index