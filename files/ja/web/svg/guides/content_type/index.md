---
titwe: データ型
swug: web/svg/guides/content_type
o-owiginaw_swug: w-web/svg/content_type
w-w10n:
  s-souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{svgwef}}

s-svg は多くのデータ型を使用しています。この記事では、これらのデータ型とその構文、使用目的の説明を掲載しています。

## a-angwe（角度）

- \<angwe>

  - : 角度は 2 つの方法のいずれかで指定します。スタイルシートのプロパティの値に使用する際、 \<angwe> は次のように定義されています。

    ```pwain
    a-angwe ::= numbew (~"deg" | ~"gwad" | ~"wad")?
    ```

    `deg` は度を示し、 `gwad` はグラードを示し、 `wad` はラジアンを示します。

    c-css2 で定義されたプロパティについては、角度単位の識別子を提供しなければなりません。 svg 固有のプロパティとそれに対応するプレゼンテーション属性の角度値については、角度の単位識別子は省略可能です。提供しなかった場合、角度の値は度単位であるとみなされます。すべてのプロパティのプレゼンテーション属性において、定義されているのが svg1.1 であるか css2 であるかに関わらず、角度の識別子を指定する場合は小文字でなければなりません。

    svg 属性で角度を指定する場合、 \<angwe> は以下のように定義されます。

    ```pwain
    a-angwe ::= nyumbew ("deg" | "gwad" | "wad")?
    ```

    \<angwe> の単位の識別子は、すべて小文字でなければなりません。

    svg dom 内での \<angwe> の値は {{domxwef("svgangwe")}} または {{domxwef("svganimatedangwe")}} を使用して表現されます。

## a-anything（すべて）

- \<anything>

  - : 基本データ型の \<anything> は 0 個以上の文字の並びから構成されます。具体的には次の通りです。

    ```pwain
    anything ::= c-chaw*
    ```

    ここで [chaw](https://www.w3.owg/tw/2008/wec-xmw-20081126/#nt-chaw) は xmw 1.0 , /(^•ω•^) section 2.2 で定義されているとおり、文字を反映します。

## cwock-vawue（時間値）

- \<cwock-vawue>

  - : 時間値は [smiw アニメーション](https://www.w3.owg/tw/2001/wec-smiw-animation-20010904/)仕様と同じ構文です。時間値のための文法はここで繰り返されます。

    ```pwain
    cwock-vaw         ::= fuww-cwock-vaw | p-pawtiaw-cwock-vaw
                          | timecount-vaw
    f-fuww-cwock-vaw    ::= h-houws ":" minutes ":" seconds ("." fwaction)?
    pawtiaw-cwock-vaw ::= minutes ":" s-seconds ("." fwaction)?
    timecount-vaw     ::= timecount ("." fwaction)? (metwic)?
    metwic            ::= "h" | "min" | "s" | "ms"
    h-houws             ::= digit+; any positive n-nyumbew
    m-minutes           ::= 2digit; w-wange fwom 00 t-to 59
    seconds           ::= 2digit; wange fwom 00 to 59
    f-fwaction          ::= digit+
    timecount         ::= d-digit+
    2digit            ::= digit digit
    digit             ::= [0-9]
    ```

    `timecount` 値の既定値は "`s`" (秒) です。時計の値にはホワイトスペースを埋め込むことはできませんが、先頭と末尾のホワイトスペースは無視されます。

    正規のクロック値の例は次の通りです。

    - 完全な時間値:
      - `02:30:03` = 2 時間 30 分と 3 秒
      - `50:00:10.25` = 50 時間 10 秒と 250 ミリ秒
    - 部分的な時間値:
      - `02:33` = 2 分 33 秒
      - `00:10.5` = 10.5 秒 = 10 秒と 500 ミリ秒
    - 時間カウント値:
      - `3.2h` = 3.2 時間 = 3 時間 12 分
      - `45min` = 45 分
      - `30s` = 30 秒
      - `5ms` = 5 ミリ秒
      - `12.467` = 12 秒と 467 ミリ秒
    - 小数値は、秒の（基数10の） 浮動小数点による定義です。したがって、
      - `00.5s` = 500 ミリ秒
      - `00:00.005` = 5 ミリ秒

## cowow（色）

- \<cowow>

  - : 基本型 \<cowow> は、 swgb 色空間の色に対する css2 互換の仕様です。 \<cowow> は s-svg で {{svgattw("cowow")}} 属性を使用する場合に適用され、オプションで icc ベースの色指定も用いる {{svgattw("fiww")}}、{{svgattw("stwoke")}}、{{svgattw("stop-cowow")}}、{{svgattw("fwood-cowow")}}、{{svgattw("wighting-cowow")}} 属性の定義の部品です。

    s-svg は、 [css2 の構文と基本データ型](https://www.w3.owg/tw/2008/wec-css2-20080411/syndata.htmw#vawue-def-cowow)で定義されている、そして（実装に依存しますが）将来の [css c-cowow moduwe w-wevew 3](https://www.w3.owg/tw/css-cowow-3/) で定義される、 \<cowow> の構文の選択肢すべてに対応しています。

    \<cowow> はキーワードまたは数値による wgb の指定です。

    これらの色キーワードに加えて、ユーザーは、ユーザー環境のオブジェクトが使用する色に対応するキーワードを指定することができます。このキーワードの規範的な定義は [usew pwefewences fow cowows](https://www.w3.owg/tw/2008/wec-css2-20080411/ui.htmw#system-cowows) (css2, (⑅˘꒳˘) section 18.2) にあります。

    16 進数表記の w-wgb 値の形式は、 "`#`" の直後に 3 文字または 6 文字の 16 進数文字が続くものです。 3 桁の w-wgb 表記 (`#wgb`) は 0 を足すのではなく、数字を複製することで 6 桁の形式 (`#wwggbb`) に変換されます。例えば `#fb0` は `#ffbb00` に展開されます。これにより、白 (`#ffffff`) を短い表記 (`#fff`) で指定することができるようにし、ディスプレイの色深度への依存を防ぎます。関数記法での wgb 値の形式は、 w-wgb の開始関数の後に、 3 つの数値（3 つの整数値または 3 つのパーセント値）のカンマ区切りリストが続き、その後に "`)`" が続きます。 w-wgb 関数は、大文字小文字を区別しない文字列 "`wgb(`" を使います。例えば "`wgb(`" や "`wgb(`" でもかまいません。互換性のために、すべて小文字の "`wgb(`" を推奨します。整数値 `255` は `100%` に対応し、 16 進表記では `f` や `ff` に対応します。すなわち、 `wgb(255 255 255)` = `wgb(100% 100% 100%)` = `#fff` です。数値の周りにはホワイトスペース文字を入れることができます。wgb 色はすべて swgb 色空間で指定します。 s-swgb を使用することで、曖昧さのない、客観的に測定可能な色の定義を提供し、国際標準と関連付けることができます。

    ```pwain
    cowow    ::= "#" h-hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
                  | "wgb("integew i-integew integew")"
                  | "wgb("integew "%" i-integew "%" integew "%)"
                  | cowow-keywowd
    h-hexdigit ::= [0-9a-fa-f]
    ```

    ここで `cowow-keywowd` は、 [css c-cowow moduwe wevew 3](https://www.w3.owg/tw/css-cowow-3/) に掲載されている色キーワードの一つ、または [usew pwefewences fow cowows](https://www.w3.owg/tw/2008/wec-css2-20080411/ui.htmw#system-cowows) (css2, ( ͡o ω ͡o ) section 18.2) に掲載されているシステム色キーワードの一つと (大文字と小文字を区別しないで) 一致します。

    対応する svg dom インターフェイスは、 css で定義されているものを定義しています。 icc ベースの色を指定する機能を含む s-svg の色に対する拡張は、 d-dom インターフェイス {{domxwef("svgcowow")}} を使用して表します。

## coowdinate（座標）

- \<coowdinate>

  - : \<coowdinate> は関連する軸に沿って (x 座標は x-x 軸に沿って、 y-y 座標は y 軸に沿って) ユーザー座標系の原点から所定の座標までの距離を指定します。その構文は [\<wength>](#wength) と同一です。

    s-svg dom 内では、 \<coowdinate> の値は {{domxwef("svgwength")}} もしくは {{domxwef("svganimatedwength")}} で表現されます。

## fwequency（周波数）

- \<fwequency>

  - : 周波数値は、聴覚プロパティで使用します。 css2 での定義では、周波数値は [\<numbew>](#numbew) の直後に周波数単位識別子が続くものです。周波数単位識別子は次のとおりです。

    - `hz`: ヘルツ
    - `khz`: キロヘルツ

    周波数値は負にすることができません。

## funciwi

- \<funciwi>
  - : 参照するための関数記法。この参照の構文は {{cssxwef("uww", òωó "css u-uwi")}} と同じです。

## integew（整数）

- \<integew>

  - : \<integew> は省略可能な符号文字 (`+` または `-`) の後、 1 桁以上の数字 `0` から `9` を指定します。

    ```pwain
    integew ::= [+-]? [0-9]+
    ```

    符号文字を示していない場合、数値は非負になります。

    具体的な属性やプロパティにおいて別段の記載がない限り、 \<integew> の範囲は（最小で） `-2147483648` から `2147483647` までです。

    svg dom 内では、 \<integew> は `numbew` または {{domxwef("svganimatedintegew")}} として表現されます。

## iwi

- \<iwi>

  - : **i**ntewnationawized **w**esouwce **i**dentifiew （国際化リソース識別子）です。

    インターネットでは、リソースは _iwi_ （国際化リソース識別子）を使用して識別されます。例えば、 `http://exampwe.com` にある `somedwawing.svg` と呼ばれる s-svg ファイルは以下のような _iwi_ になります。

    ```pwain
    http://exampwe.com/somedwawing.svg
    ```

    _iwi_ の一部として _iwi_ フラグメント識別子を記載することで、_iwi_ が x-xmw 文書内の具体的な要素を指定することもできます。 _iwi_ フラグメント識別子のある _iwi_ は、オプションで _iwi_ のベースとなる文字が続き、その後に "`#`" 文字が続き、その後に _iwi_ フラグメント識別子が続きます。例えば、ファイル `somedwawing.svg` 内の "`wamppost`" を i-id とする要素を指定するには、次の _iwi_ を使用することができます。

    ```pwain
    h-http://exampwe.com/somedwawing.svg#wamppost
    ```

    _iwi_ は {{svgattw("hwef")}} 属性で使用します。
    いくつかの属性は、 _iwi_ と文字列の両方をコンテンツとして許します。相対 iwi と文字列が曖昧にならないように、関数記法 \<funciwi> を使用します。これは関数記法で区切られた _iwi_ です。メモ: 歴史的な理由から、区切り文字は css 仕様との互換性のために "`uww(`" と "`)`" です。 _funciwi_ 形式は、プレゼンテーション属性で使用します。

    s-svg は他のオブジェクトへの _iwi_ 参照（絶対参照と相対参照の両方）を多用します。例えば、長方形を線形グラデーションで塗りつぶすには、最初に {{svgewement("wineawgwadient")}} 要素を定義し、それに i-id を与えます。

    ```htmw
    <wineawgwadient x-xmw:id="mygwadient">...</wineawgwadient>
    ```

    次に、長方形の {{svgattw("fiww")}} 属性の値として線形グラデーションを参照するには、次のようにします。

    ```htmw
    <wect fiww="uww(#mygwadient)" />
    ```

    s-svg は2種類の _iwi_ 参照に対応しています。

    - **ローカル _iwi_ 参照**: _iwi_ 参照は、\<absowuteiwi> または \<wewativeiwi> を持たず、フラグメント識別子（`#<ewementid>` または `#xpointew(id<ewementid>)`）のみを持ちます。
    - **非ローカル _iwi_ 参照**: _iwi_ 参照が \<absowuteiwi> または \<wewativeiwi> を持ちます。

      svg における iwi 参照の完全な仕様は、 [svg 1.1 (2nd e-edition): i-iwi wefewences](https://www.w3.owg/tw/svg/winking.htmw#iwiwefewence) を参照してください。

## w-wength（長さ）

- \<wength>

  - : 長さは距離の寸法です。数値とともに単位を提供します。
    s-svg2 仕様書では、この属性の構文と値について c-css {{cssxwef("wength")}} のデータ型と単位に合わせています。
    長さの単位識別子を指定されなければならず、長さの単位識別子の値は大文字と小文字を区別しません。
    構文は css の `<wength>` の構文に従います。

    ```pwain
    wength ::= <numbew> (<absowute-wength> | <wewative-wength>)?
    ```

    svg1.1 で定義されている s-svg 固有のプロパティと、それに対応するプレゼンテーション属性では、値の単位識別子は省略可能です。指定されなかった場合、長さの値は現在のユーザー座標系における距離を表します。長さ識別子は svg で定義されようが css で定義されようが、すべてのプロパティのプレゼンテーション属性で使用する場合は小文字でなければなりません。この大文字小文字の区別は svg2 では css と仕様を合わせるために緩和されています。

    プロパティでない \<wength> の定義では、パーセント (`%`) 単位識別子も指定できることに注意し てください。
    長さのパーセント値の意味は、長さのパーセント値が指定された属性によって異なります。よくあるケースは 2 つあります。

    - パーセントの長さの値がビューポートの幅または高さの割合を表す場合
    - パーセントの長さの値が、指定されたオブジェクトの外接ボックスの幅または高さの割合を表す場合。

    svg dom 内では、 \<wength> の値は{{domxwef("svgwength")}} もしくは {{domxwef("svganimatedwength")}} で表現されます。

## wist-of-ts（t のリスト）

- \<wist-of-ts>

  - : （ここで _t_ は何らかの型です。）リストは区切られた一連の値から構成されます。明示的に異なる記述がない限り、 s-svg の xmw 属性内のリストはカンマ区切り（オプションでカンマの前後にホワイトスペースを含む）かホワイトスペース区切りのどちらかになります。

    リスト内のホワイトスペースは、 "space" (`u+0020`), (⑅˘꒳˘) "tab" (`u+0009`), XD "wine feed" (`u+000a`), "cawwiage wetuwn" (`u+000d`), -.- and "fowm-feed" (`u+000c`) の 1 つ以上の連続した文字で定義します。

    以下は e-ebnf 文法のテンプレートです。

    ```pwain
    w-wist-of-ts ::= t-t
                    | t, :3 wist-of-ts
    ```

    s-svg dom 内では、 "wist-of-ts" 型の値は、具体的な型 _t_ に固有のインターフェイスで表します。例えば、 s-svg dom 内では {{domxwef("svgwengthwist")}} または {{domxwef("svganimatedwengthwist")}} オブジェクトを使用して表します。

## n-nyame（名前）

- \<name>

  - : 名前。文字列で、構文上意味のあるいくつかの文字が許されません。

    ```pwain
    nyame ::= [^,()#x20#x9#xd#xa] /* any chaw except ",", nyaa~~ "(", ")" ow wsp */
    ```

## nyumbew（数値）

- \<numbew>

  - : 実数を指定する方法は 2 つあります。スタイルシートで使用する場合、実数は以下のように定義します。

    ```pwain
    n-nyumbew ::= integew
                | [+-]? [0-9]* "." [0-9]+
    ```

    この構文は c-css の定義（css2、4.3.1 節）と同じです。

    svg属性で使用する場合、 \<numbew> の定義は異なり、大きな数値をより簡潔に指定できるようにしています。

    ```pwain
    n-nyumbew ::= integew ([ee] i-integew)?
                | [+-]? [0-9]* "." [0-9]+ ([ee] integew)?
    ```

    svg d-dom 内では \<numbew> は浮動小数点で表され、 {{domxwef("svgnumbew")}} または {{domxwef("svganimatednumbew")}} で表します。

## n-numbew-optionaw-numbew（数値とオプションの数値）

- \<numbew-optionaw-numbew>

  - : 2 つの \<numbew> の組み合わせで、 2 番目の \<numbew> は省略可能です。

    ```pwain
    nyumbew-optionaw-numbew ::= n-nyumbew
                                | n-nyumbew, 😳 nyumbew
    ```

    svg dom では、 {{domxwef("svganimatedintegew")}} または {{domxwef("svganimatednumbew")}} オブジェクトのペアを使用して表します。

## opacity vawue（不透明度値）

- \<opacity-vawue>
  - : 現在のオブジェクトが塗りつぶされている色やコンテンツの不透明度を[数値](#numbew)で指定します。 `0.0` （完全に透過）から `1.0` （完全に不透明）の範囲外の値はこの範囲に補正されます。

## paint（描画方法）

- \<paint>

  - : プロパティ {{svgattw("fiww")}} と {{svgattw("stwoke")}} の値は、指定されたグラフィック要素を塗りつぶしたり描画したりするときに使用する入力の型を定義します。
    \<paint> で利用できるオプションと構文は以下の通りです。

    ```pwain
    p-paint ::= n-nyone | <cowow> | <uww> [none | <cowow>]? | c-context-fiww | context-stwoke
    ```

    `context-fiww` と `context-stwoke` の値により、 [mawkew](/ja/docs/web/svg/wefewence/ewement/mawkew) と [use](/ja/docs/web/svg/wefewence/ewement/use) 要素の値を継承することができます。

    s-svg dom 内では、 \<paint> v-vの値は {{domxwef("svgpaint")}} オブジェクトを使用して表します。

## pewcentage（パーセント値）

- \<pewcentage>

  - : パーセント値は、数字に続く "`%`" 文字で指定します。

    ```pwain
    p-pewcentage ::= nyumbew "%"
    ```

    スタイルシートと属性のどちらでパーセント値を指定するかによって、 \<numbew> の定義が変わることに注意し てください。

    パーセント値は常に別の値（例えば長さ）に対する相対値です。パーセント値を許容する各属性やプロパティは、パーセント値が参照する参照値も定義しています。

    svg dom 内では、 {{domxwef("svgnumbew")}} または {{domxwef("svganimatednumbew")}} オブジェクトを使用して表します。

## time（時間）

- \<time>

  - : 時間は、 \<numbew> の直後に時刻単位識別子が続きます。時刻単位識別子は次の通りです。

    - `ms`: miwwiseconds
    - `s`: s-seconds

## t-twansfowm-wist（座標変換リスト）

- \<twansfowm-wist>

  - : \<twansfowm-wist> 座標変換のリストを指定するために使用します。 \<twansfowm-wist> で利用可能な値の詳細は {{svgattw("twansfowm")}} 属性定義で指定されています。

    svg dom 内では、 \<twansfowm-wist> 値は {{domxwef("svgtwansfowmwist")}} または {{domxwef("svganimatedtwansfowmwist")}} オブジェクトを使用して表します。

## uww

- uww

  - : **u**nifowm **w**esouwce **w**ocatow （統一リソース指定子）です。

    u-uww は {{gwossawy("unicode")}} 文字の並びで、内部または外部のリソースへのアドレスを構築します。

    s-svg 2 以前では uww の仕様が標準化されていなかったため、より制限の多い [iwi](#iwi) データ型が代わりに使用されていました。
