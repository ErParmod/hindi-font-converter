<h1 align="center">Hindi Font Convertor API</h1>

## Features

- Focus on high performance
- Super-high test coverage
- Fast response
- Built On Fast and minimalist web framework

### Supported Language:

- [x] Unicode to Kruti Dev 10
- [x] Kruti Dev 10 to Unicode
- [ ] Chanakya to Unicode
- [ ] Unicode to Chanakya
- [ ] 4C Gandhi to Unicode
- [ ] Unicode to 4C Gandhi
- [ ] Mangla to Unicode
- [ ] Unicode to Mangla

## Quick Start

The quickest way to get started with api is to utilize the example as shown below:

### Examples:

```php
<?php
$client = new Client();
$headers = [
  'Content-Type' => 'application/json'
];
$body = '{
  "text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
  "format": "json"
}';
$request = new Request(
    'POST',
    'https://hindi-font-converter.vercel.app/api/unicode-to-krutidev',
    $headers, $body);

$res = $client->sendAsync($request)->wait();

echo $res->getBody();
```

- API Base Url

```
https://hindi-font-converter.vercel.app/
```

### Params:

- **format:** return response type (eg: plain,html,json)
- **text:** input text that need to be converted
- **max_chuck_size:** max lenght of chars allowed(default:10000)
- `format`,`max_chuck_size` can be passed as query paramerts or body parameters

View the website at: http://localhost:4000

## Security Issues

If you discover a security vulnerability in Express, please see Security Policies and Procedures.

The original author & maintainer [Hemant Kr](https://github.com/hemant-kr-meena)
