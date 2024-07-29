import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '20s',
            target: 20
        }
        // {
        //     duration: '30s',
        //     target: 1000
        // },
        // {
        //     duration: '10s',
        //     target: 0
        // }
    ]
}

export default function () {
    http.post('http://localhost:3000/api/files/resize');
    sleep(1);
}