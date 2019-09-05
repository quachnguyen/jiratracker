import React from 'react';
import Button from '@atlaskit/button';
import { Label } from '@atlaskit/field-base';
import { Editor } from '@atlaskit/editor-core';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import { FieldTextStateless } from '@atlaskit/field-text';
import  axios  from 'axios';
import qs from 'qs';
import https from 'https';
import http from 'http';
import { tryCatch } from 'rxjs/internal/util/tryCatch';

var date = new Date();
var timespent = 0
var workdescription = '';
var baseUrl = 'https://quachnhn.atlassian.net';
const getDateTime = value => {
    date = value;
};

const getTimeSpent = (e: SyntheticInputEvent<HTMLInputElement>) => {
    timespent = e.target.value;
}

const getDescription = (e: EditorView) => {
    workdescription = e.dom.innerText;
}

const onClick = () => {
    try {
        var jiraData = {
            "timeSpentSeconds": 2400,
            "comment": "Are you crazy!!!",
            "started": "2019-08-28T12:05:00.317+0000"
        }

        /*var config = {
            baseUrl: 'https://quachnhn.atlassian.net',
            method: 'GET',
            url: 'https://quachnhn.atlassian.net/rest/api/3/application-properties/advanced-settings',
            headers: {
                'Accept': '*application/json',
                'Authorization': 'Basic cXVhY2huaG5AZ2V0bmFkYS5jb206NWNMSlRJNVdxcUVHSFZpQ0ZzeVMzQ0Q3',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
            }
        };*/

        /*var config = {
            method: 'POST',
            crossDomain: true,
            url: 'https://cors-anywhere.herokuapp.com/https://quachnhn.atlassian.net/rest/api/3/issue/JP-1/worklog',
            headers: {
                'Authorization': 'Basic cXVhY2huaG5AZ2V0bmFkYS5jb206NWNMSlRJNVdxcUVHSFZpQ0ZzeVMzQ0Q3',
                'Content-Type': 'application/json'
            },
            httpsAgent: new https.Agent({ keepAlive: true }),
            data: jiraData,
        };*/

        //axios.get('https://57a6ba45.ngrok.io/api/TimeSheetManagement/get-text', { crossdomain: true }).then(function (response) { console.log(response.data); })
        axios.post('https://corsBypassURL.com/https://quach.atlassian.net/rest/api/2/issue/SP-1/worklog', jiraData, {
            headers: {
                'Authorization': 'Basic aHVuZy5uZ3V5ZW5xdW9jLjcxNDA0OTc2QGdtYWlsLmNvbTphTDVrMkh6dzY0VGo4VVZuZUx1ekUwNzE=',
				'Content-Type' : 'application/json'
            },
        }).then(res => {
            console.log('res', res);
        }).catch(error => {
            console.error(error);
        });
    } catch (err) {
        console.log('err', err);
    };
};

function App() {
    return (
        <div>
            <h1>Time tracking</h1>
            <FieldTextStateless label="Time spent" onChange={getTimeSpent} />
            <Label htmlFor="datetimepicker" label="Date Started" />
            <DateTimePicker id="datetimepicker"
                defaultValue="2019-08-12T14:30+10:00"  timeFormat="HH:mm"
                dateFormat="DD MMMM YYYY" onChange={getDateTime} timeIsEditable />
            <Label htmlFor="description" label="Work description" />
            <Editor onChange={getDescription} appearance="comment" />
            <Button appearance="primary" onClick={onClick}>Submit</Button>
        </div>
    );
}
export default App;
