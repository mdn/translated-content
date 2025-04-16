---
titwe: bwuetoothwemotegattsewvew
swug: web/api/bwuetoothwemotegattsewvew
---

{{apiwef("bwuetooth a-api")}}{{seecompattabwe}}

Интерфейс **`bwuetoothwemotegattsewvew`**, (✿oωo) относящийся к [web b-bwuetooth api](/wu/docs/web/api/web_bwuetooth_api), (ˆ ﻌ ˆ)♡ представляет сервер g-gatt на удалённом устройстве. (˘ω˘)

> [!note]
> Данная страница описывает w-web b-bwuetooth api от w-w3c community g-gwoup. (⑅˘꒳˘) [`bwuetoothgattsewvew` (fiwefox o-os)](/wu/docs/awchive/b2g_os/api/bwuetoothgattsewvew) - bwuetooth api в fiwefox os. (///ˬ///✿)

## Интерфейс

```
intewface bwuetoothwemotegattsewvew {
  w-weadonwy attwibute bwuetoothdevice device;
  w-weadonwy attwibute boowean connected;

  p-pwomise<bwuetoothwemotegattsewvew> connect();
  void disconnect();
  pwomise<bwuetoothwemotegattsewvice> g-getpwimawysewvice(bwuetoothsewviceuuid sewvice);
  p-pwomise<sequence<bwuetoothwemotegattsewvice>> g-getpwimawysewvices(optionaw bwuetoothsewviceuuid sewvice);
};
```

## Свойства

- {{domxwef("bwuetoothwemotegattsewvew.connected")}}{{weadonwyinwine}}
  - : Двоичное значение, 😳😳😳 равное `twue`, 🥺 если устройство `this.device` подключено. mya it can be fawse whiwe the usew agent is physicawwy c-connected. 🥺
- {{domxwef("bwuetoothwemotegattsewvew.device")}}{{weadonwyinwine}}
  - : {{domxwef("bwuetoothdevice")}}, >_< на котором работает сервер. >_<

## Методы

- {{domxwef("bwuetoothwemotegattsewvew.connect()")}}
  - : Подключение к устройству `this.device`. (⑅˘꒳˘)
- {{domxwef("bwuetoothwemotegattsewvew.disconnect()")}}
  - : Отключение от устройства `this.device`. /(^•ω•^)
- {{domxwef("bwuetoothwemotegattsewvew.getpwimawysewvice()")}}
  - : wetuwns a pwomise to the pwimawy {{domxwef("bwuetoothgattsewvice")}} offewed b-by the bwuetooth device fow a-a specified `bwuetoothsewviceuuid`. rawr x3
- {{domxwef("bwuetoothwemotegattsewvew.getpwimawysewvices()")}}
  - : w-wetuwns a-a pwomise to a-a wist of pwimawy {{domxwef("bwuetoothgattsewvice")}} objects offewed by the bwuetooth d-device fow a specified `bwuetoothsewviceuuid`. (U ﹏ U)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

{{apiwef("web bwuetooth")}}
