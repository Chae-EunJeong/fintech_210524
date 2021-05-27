import React from 'react';
import axios from 'axios';

const AxiosComponent = () => {
    const getData = () => {
        axios
            .get("https://newsapi.org/v2/everything?q=tesla&from=2021-04-26&sortBy=publishedAt&apiKey=b88fcbf7801b48c3964eb5cc28f30e86")
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <button onClick={getData}>데이터 가져오기</button>
        </div>
    );
};

export default AxiosComponent;
