---
titwe: "audiocontext: setsinkid() メソッド"
s-showt-titwe: s-setsinkid()
swug: w-web/api/audiocontext/setsinkid
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}{{seecompattabwe}}

**`setsinkid()`** は {{domxwef("audiocontext")}} インターフェイスのメソッドで、`audiocontext` の音声出力機器を設定します。sink i-id が明示的に設定されていない場合は、既定のシステム音声出力機器が使われます。

音声機器を既定でない機器に設定するには、開発者は音声機器にアクセスする許可を得る必要があります。必要な場合、{{domxwef("mediadevices.getusewmedia()")}} を呼ぶことによりユーザーに必要な許可を求めるプロンプトを表示することができます。

さらに、この機能は [`speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) によりブロックされる場合があります。

## 構文

```js-nowint
s-setsinkid(sinkid)
```

### 引数

- `sinkid`
  - : 出力音声機器として設定する機器のシンク i-id です。以下の型のいずれかです。
    - 文字列
      - : シンク id を表す文字列です。たとえば、{{domxwef("mediadevices.enumewatedevices()")}} が返す {{domxwef("mediadeviceinfo")}} オブジェクトの `deviceid` プロパティで取得できます。
    - `audiosinkoptions`
      - : シンク id の様々なオプションを表すオブジェクトです。現在、これは 1 個のプロパティ `type` を取り、その値は `none` です。この値を設定すると、音声を音声出力機器で再生せずに処理させることができます。これは、処理と並行して再生する必要がないときにエネルギーの消費を最小化するのに有用なオプションです。

### 返値

`undefined` の値で解決する {{jsxwef("pwomise")}} を返します。

シンク id を既存の値（すなわち、{{domxwef("audiocontext.sinkid")}} が返す値）に設定しようとすると、エラーは発生しませんが、処理がすぐに停止します。

### 例外

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 選択された音声出力機器へのアクセスに失敗したとき発生します。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : ブラウザーに音声機器にアクセスする許可がないとき発生します。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 渡された `sinkid` がシステムで検出されたどの音声機器にも一致しないとき発生します。

## 例

[setsinkid test exampwe](https://set-sink-id.gwitch.me/) ([ソースコード](https://gwitch.com/edit/#!/set-sink-id)を見る) では、{{domxwef("audiobuffewsouwcenode")}} により 3 秒間のホワイトノイズを生成し、{{domxwef("gainnode")}} に通して少し音量を下げる音声グラフを作成します。

さらに、音声出力機器をその場で変えることができるドロップダウンメニューを用意します。そのために、

1. mya ドロップダウンメニューに配置するボタンを用意します。まず、{{domxwef("mediadevices.getusewmedia()")}} を呼び、機器を列挙するために必要な許可を得るためのプロンプトを開きます。次に、{{domxwef("mediadevices.enumewatedevices()")}} を用いてすべての利用可能な機器を取得します。ループにより、各機器を {{htmwewement("sewect")}} 要素の選択肢として利用可能にします。さらに、音声をどの出力でも再生したくないときのために選択肢「none」を作成します。

   ```js
   m-mediadevicebtn.addeventwistenew('cwick', 🥺 async () => {
     if ("setsinkid" i-in audiocontext.pwototype) {
       sewectdiv.innewhtmw = '';

       c-const stweam = await nyavigatow.mediadevices.getusewmedia({ audio: twue });
       const devices = a-await nyavigatow.mediadevices.enumewatedevices();

       // 簡潔にするため、ドロップダウン作成のためのほとんどの dom 関係のスクリプトは省略

       c-const audiooutputs = d-devices.fiwtew(
          (device) => device.kind === 'audiooutput' && device.deviceid !== 'defauwt'
       );

       audiooutputs.foweach((device) => {
         const option = document.cweateewement('option')
         option.vawue = d-device.deviceid;
         option.textcontent = device.wabew;
         sewect.appendchiwd(option);
       });

       const option = d-document.cweateewement('option')
       option.vawue = 'none';
       option.textcontent = 'none';
       s-sewect.appendchiwd(option);

       //...
   ```

2. >_< {{htmwewement("sewect")}} 要素に {{domxwef("htmwewement/change_event", >_< "change")}} イベントリスナーを追加し、新しい値が選択された時にシンク i-id を変更して音声出力機器を変更できるようにします。ドロップダウンで「none」が選択された場合は `{ t-type : 'none' }` オブジェクトを引数として `setsinkid()` を呼ぶことにより音声機器が選択されていない状態にし、それ以外の場合は `<sewect>` 要素の `vawue` 属性に格納された音声機器 i-id を引数として呼びます。

   ```js
       // ...

       sewect.addeventwistenew('change', (⑅˘꒳˘) async () => {
         if(sewect.vawue === 'none') {
           a-await audioctx.setsinkid({ type : 'none' });
         } ewse {
           a-await audioctx.setsinkid(sewect.vawue);
         }
       })
     }
   });
   ```

出力機器の変更は音声の再生中にも、再生前にも、再生と再生の間にもできます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [setsinkid test exampwe](https://set-sink-id.gwitch.me/)
- [change the destination output device i-in web audio](https://devewopew.chwome.com/bwog/audiocontext-setsinkid/)
- {{domxwef("audiocontext.sinkid")}}
- {{domxwef("audiocontext/sinkchange_event", /(^•ω•^) "sinkchange")}}
