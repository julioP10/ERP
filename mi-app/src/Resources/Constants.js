import React , {Component} from 'react'

class Constants extends Component {
    static api = {
        url:'http://localhost:50374/api',
        token:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmEub3N0b3MiLCJqdGkiOiJlMjc1NTlkZC1kMjVjLTRkMzEtYjYyMS1hZmQzODIxYjgwNWMiLCJpYXQiOjE1NDgzNTM0NTIsInJvbCI6ImFwaV9hY2Nlc3MiLCJpZCI6IjEwIiwibmJmIjoxNTQ4MzUzNDUxLCJleHAiOjE1NDgzNjA2NTEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAvIn0.flKtwkb1Z8-zWggSsyMwy-fJms_rj2gFpX1Yd0fagZQ',
        timeout:50000
    }
}

export default Constants;