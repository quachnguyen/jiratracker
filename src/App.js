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
var baseUrl = 'https://quach.atlassian.net';
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
            "comment": "My frist worklog",
            "started": "2019-09-03T12:05:00.317+0000"
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
		
        axios.post('https://cors-anywhere.herokuapp.com/https://quach.atlassian.net/rest/api/2/issue/SP-1/worklog', jiraData, {
            headers: {
				'X-Atlassian-Token'					: 'nocheck',
                'Access-Control-Allow-Origin'		: 'https://jiratracker.herokuapp.com',
				'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16bERNemsxTVRoRlFVRTJRa0ZGT0VGRk9URkJOREJDTVRRek5EZzJSRVpDT1VKRFJrVXdNZyJ9.eyJodHRwczovL2F0bGFzc2lhbi5jb20vb2F1dGhDbGllbnRJZCI6IkdQTXk0VVdJYVc1V2Y2WjRoUUZPbE9LblUwMDFIU2g2IiwiaHR0cHM6Ly9hdGxhc3NpYW4uY29tL2VtYWlsRG9tYWluIjoiZ21haWwuY29tIiwiaHR0cHM6Ly9hdGxhc3NpYW4uY29tL3N5c3RlbUFjY291bnRJZCI6IjVkNjc1MTMyOWViMzMwMGMwZjZmNjA5ZCIsImh0dHBzOi8vYXRsYXNzaWFuLmNvbS9zeXN0ZW1BY2NvdW50RW1haWxEb21haW4iOiJjb25uZWN0LmF0bGFzc2lhbi5jb20iLCJodHRwczovL2F0bGFzc2lhbi5jb20vZmlyc3RQYXJ0eSI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vYXRsYXNzaWFuLWFjY291bnQtcHJvZC5wdXMyLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZDY1ZjU0N2Y4MWYyYzBkOTllZThmYmEiLCJhdWQiOiJhcGkuYXRsYXNzaWFuLmNvbSIsImlhdCI6MTU2NzY4MDQwOSwiZXhwIjoxNTY3Njg0MDA5LCJhenAiOiJHUE15NFVXSWFXNVdmNlo0aFFGT2xPS25VMDAxSFNoNiIsInNjb3BlIjoicmVhZDpqaXJhLXVzZXIifQ.nY2ZNLNK5SsdeEZG4f7P32vgGyAD4SUormb8poSfHat53COq3YmI_Ar3UjElI_67spvimfZyqypWhlmPhZJ3zMRZYrN6cDyfi4GYdkZLDYO6OKwLkmcgK7IB5JjY_88dS7SXjRSwuiKRokc26onVtBXpZA_OQca6ruLnjeLrMO91g1dcyx4VPz82Mb4bAY8WStYQ6HnXQibQlnDFatuB-9MviXkkbNqFL0mA1CzCXHB7aM_S27Xj4P0elqZJSpMLCYRC3RSQedpQCwGkQWox_SYdPKB98AcU9wk1sBW1acFOGu9GQc-Q2noVkljeOXXkBygzEzrPqtgyxc_pS1NWrA=',
				'Content-Type' : 'application/json',
				'Accept'		: 'application/json'				
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
