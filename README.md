<h1 align="center">Hindi Font Converter API</h1>

## Features

- Focus on high performance
- Super-high test coverage
- Fast response
- Built On Fast and minimalist web framework

### Supported Language:

- [x] Unicode to Kruti Dev 10
- [x] Kruti Dev 10 to Unicode
- [x] Chanakya to Unicode
- [x] Unicode to Chanakya
- [ ] 4C Gandhi to Unicode
- [ ] Unicode to 4C Gandhi

## Quick Start

The quickest way to get started with api is to utilize the example as shown below:
## Endpoints:
- API Base URL: [https://hindi-font-converter.vercel.app/](https://hindi-font-converter.vercel.app/)
```
https://hindi-font-converter.vercel.app/
```
|  Endpoint 	              | Parameter |  Response |
|---	                      |---	      |---	      |
|  `/` 	 or `/about`        |    -      | API INFO  |
|  /api/unicode-krutidev 	  |    -      |   	-     |
|  /api/unicode-to-krutidev |    -      |   	-     |
|  /api/krutidev-to-unicode |    -      |   	-     |
|  /api/unicode-chankya 	  |    -      |   	-     |
|  /api/unicode-to-chankya 	|    -      |   	-     |
|  /api/chankya-to-unicode 	|   	-     |   	-     |

### Examples:

```js
const axios = require('axios');
let data = JSON.stringify({
  "text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
  "format": "json",
  "to_font": "krutidev"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://hindi-font-converter.vercel.app/api/unicode-krutidev',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```


### Params:

- **format:** return response type (eg: plain,html,json)
- **text:** input text that need to be converted
- **max_chuck_size:** max lenght of chars allowed(default:10000)
- `format`,`max_chuck_size` can be passed as query paramerts or body parameters

View the website at: https://hindi-font-converter.vercel.app

## Security Issues

If you discover a security vulnerability in API, than you can drop us Email on [meenahemantkr@gmail.com](mailto:meenahemantkr@gmail.com).

The original author & maintainer [Hemant Kr](https://github.com/hemant-kr-meena)
