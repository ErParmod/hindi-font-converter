# Project: Hindi Font Converter

## End-point: Home
### Method: GET
>```
>https://hindi-font-converter.vercel.app/
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: About
### Method: GET
>```
>https://hindi-font-converter.vercel.app/about
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unicode - KrutiDev
### Method: POST
>```
>https://hindi-font-converter.vercel.app/api/unicode-krutidev
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
  "text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
  "format": "json",
  "to_font": "krutidev"
}
```

### Response: 200
```json
{
    "status": true,
    "message": "Text converted to krutidev successfully.",
    "data": {
        "input_text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
        "output_text": "Hkkjr ,d fo'kky ns'k gS tks nf{k.k ,f'k;k esa fLFkr gSA"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: unicode-to-krutidev
### Method: POST
>```
>https://hindi-font-converter.vercel.app/api/unicode-to-krutidev
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
"text":"भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
"format": "json"
}
```

### Response: 200
```json
{
    "status": true,
    "message": "Data from Unicode to Krutidev converted successfully.",
    "data": {
        "input_text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
        "output_text": "Hkkjr ,d fo'kky ns'k gS tks nf{k.k ,f'k;k esa fLFkr gSA"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: krutidev-to-unicode
### Method: POST
>```
>https://hindi-font-converter.vercel.app/api/krutidev-to-unicode
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "text": "Hkkjr ,d fo'kky ns'k gS tks nf{k.k ,f'k;k esa fLFkr gSA",
    "format": "json"
}
```

### Response: 200
```json
{
    "status": true,
    "message": "Data from Krutidev to Unicode converted successfully.",
    "data": {
        "input_text": "Hkkjr ,d fo'kky ns'k gS tks nf{k.k ,f'k;k esa fLFkr gSA",
        "output_text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Unicode - Chankya
### Method: POST
>```
>https://hindi-font-converter.vercel.app/api/unicode-chankya
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
    "text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
    "format": "json",
    "to_font": "chankya"
}
```

### Response: 200
```json
{
    "status": true,
    "message": "Text converted to chankya successfully.",
    "data": {
        "input_text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
        "output_text": "ÖæÚUÌ °·¤ çßàææÜ Îðàæ ãñ Áô Îçÿæ‡æ °çàæØæ ×ð´ çSÍÌ ãñÐ"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: unicode-to-chankya
### Method: POST
>```
>https://hindi-font-converter.vercel.app/api/unicode-to-chankya
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
"text":"भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
"format": "json"
}
```

### Response: 200
```json
{
    "status": true,
    "message": "Data from Unicode to Chankya converted successfully.",
    "data": {
        "input_text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।",
        "output_text": "ÖæÚUÌ °·¤ çßàææÜ Îðàæ ãñ Áô Îçÿæ‡æ °çàæØæ ×ð´ çSÍÌ ãñÐ"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: chankya-to-unicode
### Method: POST
>```
>https://hindi-font-converter.vercel.app/api/chankya-to-unicode
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Body (**raw**)

```json
{
"text":"ÖæÚUÌ °·¤ çßàææÜ Îðàæ ãñ Áô Îçÿæ‡æ °çàæØæ ×ð´ çSÍÌ ãñÐ",
"format": "json"
}
```

### Response: 200
```json
{
    "status": true,
    "message": "Data from Chankya to Unicode converted successfully.",
    "data": {
        "input_text": "ÖæÚUÌ °·¤ çßàææÜ Îðàæ ãñ Áô Îçÿæ‡æ °çàæØæ ×ð´ çSÍÌ ãñÐ",
        "output_text": "भारत एक विशाल देश है जो दक्षिण एशिया में स्थित है।"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
