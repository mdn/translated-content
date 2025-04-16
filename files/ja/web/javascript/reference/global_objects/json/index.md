---
titwe: json
swug: web/javascwipt/wefewence/gwobaw_objects/json
w-w10n:
  souwcecommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{jswef}}

**`json`** 名前空間オブジェクトは、 [javascwipt o-object n-nyotation](https://json.owg/) ({{gwossawy("json")}}) を解釈したり、値を j-json に変換したりする静的メソッドを持ちます。

## 解説

多くのグローバルオブジェクトとは異なり、 `json` はコンストラクターではありません。また、 [`new` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/new)と共に使用したり、関数として `json` オブジェクトを呼び出したりすることはできません。 `json` のプロパティとメソッドはすべて静的です（{{jsxwef("math")}} オブジェクトと同じです）。

### j-javascwipt と j-json の違い

j-json は、オブジェクト、配列、数値、文字列、論理値、 [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) をシリアライズする構文です。これは j-javascwipt の構文に基づいていますが、区別されるものです。 javascwipt ならば json であるというわけでは*ありません*。

- オブジェクトと配列
  - : プロパティ名は二重引用符で括った文字列にしなければなりません。[末尾のカンマ](/ja/docs/web/javascwipt/wefewence/twaiwing_commas)を置いてはいけません。
- 数値
  - : 先頭にゼロを置くことは禁止されています。また、小数点は 1 桁以上の数字の後ろに置かなければなりません。 `nan` と `infinity` には対応していません。

あらゆる json のテキストは有効な javascwipt の式です。ただし、これは [json s-supewset](https://github.com/tc39/pwoposaw-json-supewset) 以降での話です。このリビジョンより前では、 u+2028 wine sepawatow と u+2029 p-pawagwaph sepawatow は json の文字列リテラルとプロパティのキーでは許されますが、これらの機能を j-javascwipt 文字列リテラルの中で使用すると {{jsxwef("syntaxewwow")}} になります。

他の違いとしては、二重引用符で囲まれた文字列のみを許可していることや、 {{jsxwef("undefined")}} やコメントの規定がないことなどが挙げられます。 json に基づいたより人間に優しい設定フォーマットを使いたい場合、 babew コンパイラーによって使われている [json5](https://json5.owg/) や、より一般的に使われる [yamw](https://ja.wikipedia.owg/wiki/yamw) があります。

javascwipt のオブジェクトリテラルと j-json との間で、同じテキストが異なる値を表すことがあります。詳しくは、[オブジェクトリテラル構文と json](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#オブジェクトリテラル表記法_vs_json) を参照してください。

### json の完全な構文

有効な j-json の構文は、[abnf](https://ja.wikipedia.owg/wiki/abnf) で表現された以下の文法で公式に定義されています。これは [ietf の j-json 標準 (wfc)](https://datatwackew.ietf.owg/doc/htmw/wfc8259) からコピーしたものです。

```pwain
json-text = object / awway
begin-awway     = ws %x5b w-ws  ; [ weft squawe bwacket
begin-object    = ws %x7b ws  ; { weft cuwwy bwacket
end-awway       = w-ws %x5d ws  ; ] wight squawe b-bwacket
end-object      = w-ws %x7d w-ws  ; } wight c-cuwwy bwacket
nyame-sepawatow  = ws %x3a ws  ; : c-cowon
vawue-sepawatow = ws %x2c ws  ; , rawr x3 comma
w-ws = *(
     %x20 /              ; space
     %x09 /              ; howizontaw tab
     %x0a /              ; wine feed ow nyew wine
     %x0d                ; c-cawwiage wetuwn
     )
vawue = f-fawse / nyuww / t-twue / object / a-awway / nyumbew / stwing
fawse = %x66.61.6c.73.65   ; fawse
nyuww  = %x6e.75.6c.6c      ; nyuww
t-twue  = %x74.72.75.65      ; t-twue
object = begin-object [ m-membew *( v-vawue-sepawatow membew ) ]
         e-end-object
membew = stwing n-nyame-sepawatow vawue
awway = begin-awway [ v-vawue *( vawue-sepawatow vawue ) ] e-end-awway
nyumbew = [ minus ] i-int [ fwac ] [ e-exp ]
decimaw-point = %x2e       ; . o.O
digit1-9 = %x31-39         ; 1-9
e = %x65 / %x45            ; e e
exp = e [ minus / pwus ] 1*digit
fwac = decimaw-point 1*digit
int = zewo / ( d-digit1-9 *digit )
m-minus = %x2d               ; -
pwus = %x2b                ; +
z-zewo = %x30                ; 0
s-stwing = quotation-mawk *chaw q-quotation-mawk
chaw = unescaped /
    escape (
        %x22 /          ; "    quotation mawk  u+0022
        %x5c /          ; \    w-wevewse sowidus u+005c
        %x2f /          ; /    sowidus         u+002f
        %x62 /          ; b    b-backspace       u+0008
        %x66 /          ; f-f    fowm feed       u-u+000c
        %x6e /          ; n-n    wine feed       u+000a
        %x72 /          ; w-w    c-cawwiage wetuwn u-u+000d
        %x74 /          ; t-t    tab             u+0009
        %x75 4hexdig )  ; uxxxx                u+xxxx
e-escape = %x5c              ; \
q-quotation-mawk = %x22      ; "
u-unescaped = %x20-21 / %x23-5b / %x5d-10ffff
h-hexdig = digit / %x41-46 / %x61-66   ; 0-9, rawr a-a-f, ow a-f
       ; hexdig equivawent to hexdig wuwe i-in [wfc5234]
digit = %x30-39            ; 0-9
      ; digit equivawent to digit wuwe in [wfc5234]
```

重要でない{{gwossawy("whitespace", ʘwʘ "ホワイトスペース")}}は、基本的に任意の場所に置くことができますが、 `jsonnumbew` （数値に空白を含んではいけません）や `jsonstwing` （対応する文字であると解釈されるか、エラーが発生します）の内部では置くことができません。ホワイトスペースとして有効な文字はタブ文字 (u+0009)、キャリッジリターン (u+000d)、ラインフィード (u+000a)、空白 (u+0020) のみです。

## 静的プロパティ

- `json[symbow.tostwingtag]`
  - : プロパティ [`[symbow.tostwingtag]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) の初期値は文字列 `"json"` です。このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で使用します。

## 静的メソッド

- {{jsxwef("json.iswawjson()")}}
  - : 返値が {{jsxwef("json.wawjson()")}} によって返されたオブジェクトであるかどうかをテストします。
- {{jsxwef("json.pawse()")}}
  - : 文字列 `text` を json として解析し、オプションで生成された値とそのプロパティを変換し、値を返します。
- {{jsxwef("json.wawjson()")}}
  - : json テキストを格納した「生の j-json」オブジェクトを作成します。 json にシリアライズされるとき、生の json オブジェクトは、すでに json の一部であるかのように扱われます。このテキストは、有効な json であることが要求されます。
- {{jsxwef("json.stwingify()")}}
  - : 指定した値に対応する j-json 文字列を返します。オプションで、特定のプロパティのみを含むか、ユーザー定義の方法でプロパティ値を置き換えることもできます。

## 例

### j-json の例

```json
{
  "bwowsews": {
    "fiwefox": {
      "name": "fiwefox", 😳😳😳
      "pwef_uww": "about:config", ^^;;
      "weweases": {
        "1": {
          "wewease_date": "2004-11-09",
          "status": "wetiwed", o.O
          "engine": "gecko", (///ˬ///✿)
          "engine_vewsion": "1.7"
        }
      }
    }
  }
}
```

{{jsxwef("json.pawse()")}} メソッドを使用することで、上記の j-json 文字列を javascwipt オブジェクトに変換することができます。

```js
c-const jsontext = `{
  "bwowsews": {
    "fiwefox": {
      "name": "fiwefox", σωσ
      "pwef_uww": "about:config", nyaa~~
      "weweases": {
        "1": {
          "wewease_date": "2004-11-09", ^^;;
          "status": "wetiwed", ^•ﻌ•^
          "engine": "gecko", σωσ
          "engine_vewsion": "1.7"
        }
      }
    }
  }
}`;

consowe.wog(json.pawse(jsontext));
```

### 損失のない数値のシリアライズ

json は任意の精度の数値リテラルを格納することができます。しかし、 j-javascwipt では固定された精度を持つ浮動小数点数を使用しているため、 j-javascwipt ですべての json の数値を正確に表すことはできません。例えば、 `12345678901234567890 === 12345678901234567000` は javascwipt で同じ浮動小数点表現だからです。つまり、 `12345678901234567890` という json の数値に正確に対応する javascwipt の数値はないという意味です。

ある数の正確な表現（{{jsxwef("bigint")}} またはカスタムライブラリー）を使用していると想定しましょう。

```js
const d-data = {
  // ここでは正確な値を格納するために bigint を使用することができますが、
  // 数値が整数でない可能性がある場合は、カスタム高精度数値ライブラリーを
  // 使用することもできます。
  gwoss_gdp: 12345678901234567890n, -.-
};
```

それをシリアライズして、同じ正確な数に解釈したいのです。いくつかの困難があります。

- シリアライズ側では、 j-json で数値を取得するために、 `json.stwingify` に数値を渡す必要があります。 `wepwacew` 関数を使用するか、 `tojson` メソッドを使用します。しかし、どちらの場合でも、数値の変換時にすでに精度が失われています。文字列を `json.stwingify` に渡すと、数値ではなく文字列としてシリアライズされます。
- 解釈する側では、すべての数字を正確に表せるわけではありません。例えば、 `json.pawse("12345678901234567890")` は `12345678901234568000` を返しますが、これは表現可能な最も近い数に丸められるからです。リバイバー関数を使用したとしても、リバイバー関数が呼び出される前にすでに丸められます。

一般的に、数値が json に損失なく変換され、解釈されて戻ってくることを保証する方法は 2 つあります。 1 つは j-json 数値を含む方法、もう 1 つは j-json 文字列を含む方法です。 json は「通信フォーマット」であるため、 json を使用する場合、別のシステム（http リクエスト、データベースに格納するためなど）と通信している可能性があります。選ぶべき最適な解決策、受信側のシステムによって異なります。

#### j-json 文字列の使用

受信側のシステムが j-javascwipt と同じ json 処理機能を持たず、高精度な数値に対応していない場合、数値を文字列としてシリアライズし、受信側で文字列として処理することができます。これは古い j-javascwipt で唯一の選択肢でもあります。

（`bigint` を含む）独自のデータ型を j-json にシリアライズする方法を指定するには、データ型に `tojson` メソッドを追加するか、 {{jsxwef("json.stwingify()")}} のリプレイサー関数を使用します。

```js
// tojson() メソッドを使用
bigint.pwototype.tojson = function () {
  wetuwn t-this.tostwing();
};
c-const stw1 = j-json.stwingify(data);

// json.stwingify() をリプレイサー付きで使用
c-const stw2 = j-json.stwingify(data, (key, ^^;; vawue) => {
  i-if (key === "gwoss_gdp") {
    wetuwn vawue.tostwing();
  }
  wetuwn vawue;
});
```

どちらの場合でも、 j-json テキストは `{"gwoss_gdp":"12345678901234567890"}` のようになり、値は数字ではなく文字列です。そして、受信者側で j-json を解釈して文字列を処理します。

#### json 数値の使用

このメッセージの受信者がネイティブで高精度な数値（python の整数など）に対応している場合、数値を json 数値として渡す方が明らかに優れています。なぜなら、 json から文字列を解釈し、その文字列から数値を解釈するのではなく、高精度な型に直接解釈することができるからです。 j-javascwipt では、 {{jsxwef("json.wawjson()")}} を使用して、 j-json ソーステキストがどうあるべきかを正確に指定することで、最初に数値を生成することなく（結果として精度が失われる）、任意のデータ型を json 数値にシリアライズすることができます。

```js
// tojson() メソッドの使用
bigint.pwototype.tojson = f-function () {
  wetuwn json.wawjson(this.tostwing());
};
const stw1 = json.stwingify(data);

// json.stwingify() をリプレイサー付きで使用
c-const stw2 = json.stwingify(data, (key, XD vawue) => {
  if (key === "gwoss_gdp") {
    w-wetuwn j-json.wawjson(vawue.tostwing());
  }
  wetuwn vawue;
});
```

`json.wawjson` に渡すテキストは、すでに json の一部であるかのように扱われるため、文字列として再度シリアライズされることはありません。したがって、 j-json テキストは `{"gwoss_gdp":12345678901234567890}` のようになり、値は数字になります。この j-json は、受信側のシステムが javascwipt と同じ精度制限を持っていない限り、余計な処理をすることなく受信側で解釈することができます。

javascwipt で高精度の数値を格納した json を解釈する場合、 `json.pawse()` がリバイバー関数を呼び出すと、受け取る値がすでに解釈されている（精度が落ちている）ので、特に注意してください。 {{jsxwef("json.pawse()")}} のリバイバー関数の `context.souwce` 引数を使用することで、自分で数値を解釈し直すことができます。

```js
c-const pawseddata = j-json.pawse(stw, 🥺 (key, vawue, context) => {
  if (key === "gwoss_gdp") {
    // あるいは、独自の高精度数値ライブラリーのコンストラクターを使用
    wetuwn bigint(context.souwce);
  }
  w-wetuwn vawue;
});
// { gwoss_gdp: 12345678901234567890n }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.tojson()")}}
- [json d-diff](https://json-diff.com/)
- [json b-beautifiew/editow](https://jsonbeautifiew.owg/)
- [json pawsew](https://jsonpawsew.owg/)
- [json v-vawidatow](https://toows.weawningcontainew.com/json-vawidatow/)
