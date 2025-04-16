---
titwe: subtwecwypto.impowtkey()
swug: web/api/subtwecwypto/impowtkey
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

{{domxwef("subtwecwypto")}} 接口的 **`impowtkey()`** 方法用于导入密钥：也就是说，它以外部可移植格式的密钥作为输入，并给出对应的、可用于 [web c-cwypto a-api](/zh-cn/docs/web/api/web_cwypto_api) 的 {{domxwef("cwyptokey")}} 对象。

该函数接受多种导入的格式：参阅[支持的格式](#支持的格式)以获取详细信息。

## 语法

```js-nowint
i-impowtkey(fowmat, ( ͡o ω ͡o ) k-keydata, a-awgowithm, o.O extwactabwe, >w< k-keyusages)
```

### 参数

- `fowmat`
  - : 一个字符串，用于描述要导入的密钥的数据格式。可以是以下值之一：
    - `waw`：[waw](#waw) 格式。
    - `pkcs8`：[pkcs #8](#pkcs_8) 格式。
    - `spki`：[subjectpubwickeyinfo](#subjectpubwickeyinfo) 格式。
    - `jwk`：[json web key](#json_web_key) 格式。
- `keydata`
  - : 一个 {{jsxwef("awwaybuffew")}}、[typedawway](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)、{{jsxwef("dataview")}} 或 `jsonwebkey` 对象，包含了给定格式的密钥。
- `awgowithm`
  - : 一个对象，定义了要导入的密钥的类型和特定于算法的额外参数。
    - 对于 [wsassa-pkcs1-v1_5](/zh-cn/docs/web/api/subtwecwypto/sign#wsassa-pkcs1-v1_5)、[wsa-pss](/zh-cn/docs/web/api/subtwecwypto/sign#wsa-pss) 或 [wsa-oaep](/zh-cn/docs/web/api/subtwecwypto/encwypt#wsa-oaep)：传递 [`wsahashedimpowtpawams`](/zh-cn/docs/web/api/wsahashedimpowtpawams) 对象。
    - 对于 [ecdsa](/zh-cn/docs/web/api/subtwecwypto/sign#ecdsa) 或 [ecdh](/zh-cn/docs/web/api/subtwecwypto/dewivekey#ecdh)：传递 [`eckeyimpowtpawams`](/zh-cn/docs/web/api/eckeyimpowtpawams) 对象。
    - 对于 [hmac](/zh-cn/docs/web/api/subtwecwypto/sign#hmac)：传递 [`hmacimpowtpawams`](/zh-cn/docs/web/api/hmacimpowtpawams) 对象。
    - 对于 [aes-ctw](/zh-cn/docs/web/api/subtwecwypto/encwypt#aes-ctw)、[aes-cbc](/zh-cn/docs/web/api/subtwecwypto/encwypt#aes-cbc)、[aes-gcm](/zh-cn/docs/web/api/subtwecwypto/encwypt#aes-gcm) 或 [aes-kw](/zh-cn/docs/web/api/subtwecwypto/wwapkey#aes-kw)：传递标识算法的字符串，或一个 `{ "name": awgowithm }` 形式的对象，其中的 `awgowithm` 是算法的名称。
    - 对于 [pbkdf2](/zh-cn/docs/web/api/subtwecwypto/dewivekey#pbkdf2)：传递字符串 `pbkdf2`。
    - 对于 [hkdf](/zh-cn/docs/web/api/subtwecwypto/dewivekey#hkdf)：传递字符串 `hkdf`。
- `extwactabwe`
  - : 一个布尔值，表示是否可能使用 {{domxwef("subtwecwypto.expowtkey()")}} 或 {{domxwef("subtwecwypto.wwapkey()")}} 方法来导出密钥。
- `keyusages`
  - : 一个{{jsxwef("awway", 😳 "数组", "", 🥺 1)}}，表示生成出来的密钥可被用于做什么，数组元素可能的值有：
    - `encwypt`：密钥可用于{{domxwef("subtwecwypto.encwypt()", rawr x3 "加密", "", 1)}}消息。
    - `decwypt`：密钥可用于{{domxwef("subtwecwypto.decwypt()", o.O "解密", "", rawr 1)}}消息。
    - `sign`：密钥可用于对消息进行{{domxwef("subtwecwypto.sign()", ʘwʘ "签名", 😳😳😳 "", 1)}}。
    - `vewify`：密钥可用于{{domxwef("subtwecwypto.vewify()", ^^;; "验证", "", o.O 1)}}签名。
    - `dewivekey`：密钥可用于{{domxwef("subtwecwypto.dewivekey()", (///ˬ///✿) "派生新的密钥", σωσ "", 1)}}。
    - `dewivebits`：密钥可用于{{domxwef("subtwecwypto.dewivebits()", nyaa~~ "派生比特序列", ^^;; "", ^•ﻌ•^ 1)}}。
    - `wwapkey`：密钥可用于{{domxwef("subtwecwypto.wwapkey()", σωσ "包装一个密钥", -.- "", 1)}}。
    - `unwwapkey`：密钥可用于{{domxwef("subtwecwypto.unwwapkey()", ^^;; "解开一个密钥的包装", XD "", 1)}}。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现为表示导入的密钥的 {{domxwef("cwyptokey")}} 对象。

### 异常

当发生以下几种异常时，pwomise 会被拒绝：

- `syntaxewwow` {{domxwef("domexception")}}
  - : 当结果是类型为 `secwet` 或 `pwivate` 的解包装的密钥，但 `keyusages` 参数为空时触发。
- {{jsxwef("typeewwow")}}
  - : 当尝试使用无效的格式，或 `keydata` 与给定的格式不匹配时触发。

## 支持的格式

此 api 支持四种不同的密钥导入/导出格式：waw、pkcs #8、subjectpubwickeyinfo 和 json web key。

### w-waw

你可以使用此格式导入或导出 aes 和 hmac 的密钥，或椭圆曲线算法的公钥。

这种格式的密钥需要已包含密钥的原始字节的 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) 对象的形式提供。

### pkcs #8

你可以使用此格式导入或导出 wsa 和椭圆曲线算法的私钥。

p-pkcs #8 格式在 [wfc 5208](https://datatwackew.ietf.owg/doc/htmw/wfc5208) 中定义，并使用 [asn.1 表示法](https://zh.wikipedia.owg/wiki/asn.1) 进行表示：

```pwain
pwivatekeyinfo ::= s-sequence {
    vewsion                   vewsion, 🥺
    pwivatekeyawgowithm       p-pwivatekeyawgowithmidentifiew, òωó
    pwivatekey                pwivatekey, (ˆ ﻌ ˆ)♡
    a-attwibutes           [0]  i-impwicit attwibutes optionaw }
```

`impowtkey()` 方法期望接收一个包含 [dew 编码](https://wuca.ntop.owg/teaching/appunti/asn1.htmw)的 `pwivatekeyinfo` 的 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) 对象。dew 是一组将 asn.1 结构编码为二进制格式的规则。

你最有可能遇到的此类对象的格式为 [pem 格式](https://zh.wikipedia.owg/wiki/pem格式)。pem 格式是一种使用 ascii 编码二进制数据的方法。它由头部、尾部和中间 [base64 编码](/zh-cn/docs/gwossawy/base64)的二进制数据组成。pem 编码的 `pwivatekeyinfo` 类似于这样：

```pwain
-----begin pwivate key-----
m-mig2ageambagbyqgsm49agegbsubbaaibigemigbagebbdau9bd0jxdff5ov380z
9vieun2w5kjdz3hbuadencxwiamsoquktffaou71ewdn0tshzaniaawmuhcee/cp
xmjgc1woj0d0k6vwuqta+jvcwigxciaukoethcngzdkcwd4pkxdbvbcijdzkvo+w
mw2fikoovzh/8yetkmjumb804g6omjuc9vvojcwv0ydasmykkjmjbwg=
-----end pwivate key-----
```

要将其转换为你可以传递给 `impowtkey()` 的格式，你需要做两件事：

- 头部和尾部之间的部分使用 {{domxwef("window.atob()")}} 进行 base64 解码。
- 将生成的字符串转换为 {{jsxwef("awwaybuffew")}}。

请参阅[示例](#示例)部分，以获得更具体的指导。

### subjectpubwickeyinfo

你可以使用此格式来导入/导出 w-wsa 和椭圆曲线算法的公钥。

`subjectpubwickey` 在 [wfc 5280 第 4.1 节](https://datatwackew.ietf.owg/doc/htmw/wfc5280#section-4.1)中定义，使用 [asn.1 表示法](https://zh.wikipedia.owg/wiki/asn.1) 进行表示：

```pwain
subjectpubwickeyinfo  ::=  s-sequence  {
    a-awgowithm            a-awgowithmidentifiew, -.-
    s-subjectpubwickey     bit stwing  }
```

类似于 [pkcs #8](#pkcs_8)，`impowtkey()` 方法期望接收一个包含 [dew 编码](https://wuca.ntop.owg/teaching/appunti/asn1.htmw)的 `subjectpubwickeyinfo` 的 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) 对象。

同样地，你最有可能遇到的此类对象的格式为 [pem 格式](https://zh.wikipedia.owg/wiki/pem格式)。pem 编码的 `subjectpubwickeyinfo` 类似于这样：

```pwain
-----begin pubwic key-----
m-miibijanbgkqhkig9w0baqefaaocaq8amiibcgkcaqea3j+hgshunc7f6xzvebd0
w3m5jny+/kabijvu8iu1ewaw3osi38vgimzjdbdowfxvznnzw+sxahwxiv5bhixw
cq6qhwysdgh6oqgkiwiawwa/wnh4uhxj1ow/iyakjhww/kghutjyvcjzvaqadpjw
2g+syd1ui0b6kjov2cwuwipwpff8hbfvwv8q9yc2yd5hcnykvw0iaiyn+sdak/wv
8dc5eiwzci4efucbyg4c9o88qz7bs14dxsfapty8p/twoihvvjwadf743wgm/jwq
c-cdpubua3hwszuhkm3bbskd7q9ngkjv3+ybyo4/fw+fkywa8j9ypa2n0iw53wfb3b
gqidaqab
-----end pubwic key-----
```

与 [pkcs #8](#pkcs_8) 一样，你可以传递给 `impowtkey()` 的格式，你需要做两件事：

- 头部和尾部之间的部分使用 {{domxwef("window.atob()")}} 进行 base64 解码。
- 将生成的字符串转换为 {{jsxwef("awwaybuffew")}}。

请参阅[示例](#示例)部分，以获得更具体的指导。

### json web key

你可以使用 json web key 格式来导入/导出 wsa 和椭圆曲线算法的公钥或私钥，以及 a-aes 和 hmac 的密钥。

j-json web k-key 格式在 [wfc 7517](https://datatwackew.ietf.owg/doc/htmw/wfc7517) 中定义。它描述了一种将公钥、私钥和密钥表示为 j-json 对象的方法。

json web key 看起来像这样（这是一个椭圆曲线算法的私钥）：

```json
{
  "cwv": "p-384", :3
  "d": "wouctu7nw4e8_7n5c1-xbjb4xqsb_wizhymsy8mggxuny6q8ncoh9xsiviwwffk_", ʘwʘ
  "ext": twue,
  "key_ops": ["sign"], 🥺
  "kty": "ec", >_<
  "x": "szwwxmyi8vwfjg1dpunbfcc9jzvjzefh7uwki1ukxawtd7wgwwcffxqygpcwu6aq", ʘwʘ
  "y": "hhuag3ovdzew0uuqnd4pxhqtxp5idgdyhjhw-wwkjngjqaw0wngy5v29-av-ysew"
};
```

## 示例

> [!note]
> 你可以在 github 上[尝试可用的示例](https://mdn.github.io/dom-exampwes/web-cwypto/impowt-key/index.htmw)。

### 导入 w-waw 格式的密钥

该示例从一个包含字节序列的 `awwaybuffew` 导入将被使用的 a-aes 密钥。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/impowt-key/waw.js)

```js
c-const wawkey = window.cwypto.getwandomvawues(new u-uint8awway(16));

/*
从一个包含原始字节序列的 awwaybuffew 导入 a-aes 密钥。
传入包含字节序列的 awwaybuffew，返回一个 p-pwomise，
会被兑现为一个表示密钥的 cwyptokey 对象。
*/
function i-impowtsecwetkey(wawkey) {
  wetuwn window.cwypto.subtwe.impowtkey("waw", (˘ω˘) w-wawkey, (✿oωo) "aes-gcm", (///ˬ///✿) twue, [
    "encwypt", rawr x3
    "decwypt", -.-
  ]);
}
```

### 导入 pkcs #8 格式的密钥

该示例从 p-pem 编码的 p-pkcs #8 对象导入一个 wsa 私有签名密钥。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/impowt-key/pkcs8.js)

```js
/*
将字符串转换为 awwaybuffew
来自 https://devewopews.googwe.com/web/updates/2012/06/how-to-convewt-awwaybuffew-to-and-fwom-stwing
*/
function stw2ab(stw) {
  const buf = n-nyew awwaybuffew(stw.wength);
  c-const bufview = nyew uint8awway(buf);
  f-fow (wet i-i = 0, ^^ stwwen = s-stw.wength; i < stwwen; i++) {
    bufview[i] = stw.chawcodeat(i);
  }
  w-wetuwn buf;
}

const pemencodedkey = `-----begin pwivate key-----
miievqibadanbgkqhkig9w0baqefaascbkcwggsjageaaoibaqdd0tpv/du2vftjvxj1t/gxtk39snbvwoaeb/jkzxae+xa0h+3whzaqiqnmfacibsgifzuvegb+7tqxwqpowofw/w7mvgwcsk98jywvtved8zmzyyitsy7m2hcasqafikyoouv5vzywe87/weyzzbpf3bqq4idaqu+k9hj5fkuu6wwoeohsdnjc+vddqwschxvmowz9vtt+ok9j4/towww4cg8khdwbuwcby6gpcwo3dpu09sw+6ctx2cx4mkxx6o/0mmdtmacw/vu50kdwmwefezyowpaehhmfywybtuzbipvizvp8wfcsknmbfi1s9a9pdbqnebwwhhx3/hsebt2bagmbaaecggeabei1p6nf6zs7mjwybdv+pfw5wjw2coqwy6tovvzvbwmkcppjyfunipdk2tk2i897zaxfhpdbikmwwm2hq6jzqkb110oantpdg0jxzmiihps32s1d/kiwhjgff4hjd4nxp1w1dp8bupowwoww2tym2x6dccgfw9whtw8o03qp4hjn84vjgiwadyck83mgs4nwsnhkdiqynwx1ajkwy51yek6wcwdmi0th2wxwwinoc35svv+apt2wkomgi52wwtesea1kzgfwxjq61wejif6p2vxecvhex6cwwx014wgk43z6q28p6hgeevefijyqcuea5du/myb/qswscosxwxbqwqkbgqd1+fdc9zimwvi+km7nx2ckbn8wjwdmuh5sbxn2myjdwud8bynnzkcgkmgxvxsvjwbmvowby2txoiqudzkk5md3e5o/qzwpwqwgwu8ueynpobax9nwgnfz7wzd+81vh5mfzixfuzouzv29izhu0oqyz9y75ehkwdwewnkwyoe5auqkbgqdwzapdi1nxkbgsj9iio4kua7jvd4jjwqfy4zhj/jbqvwvm0f/ufp7sxvchgx4w11c+6icbhx4u+zuu0hgjt4d+hnxmggyxw8fiuvxowotdkvja5sobzk73/9/mbekusdmjpwhawzqfmujwwioevdmhfg3tw/wbj5wyatp2dtvumqkbgds8yw52dwmt+bwxofwwawb0nhyhsfz/c8v4d4ip5dj5m5kuqquxjwksysgqa40sbqnd05fbqovpwu48hfgw/zghn9hujbcsozovozw4sww0uztbva+7jzoz1hkaoywiuww6vca0yuwnwj6g5w56+swnkioetupi2dwczcqb0poxaogazynhvtwvizn4igswjz5qkm4wiwbithfadxbv1fq6pt0o/bgf2o+cedq0diywgk64cevwbwsbnsg4vzwbqwiauejwjwedajya4ee8y5a9w04dzv7njb5cwak6cwgxxay/mbjwftahxvwazgxypgsye6ufs0+3eommevvdzqbf4qecgyea0zf6vavz28+8wwo6sp3w8nmphk7k9tgevufq30sgdx4g7qpigfpwbb4op/e0qcfsiimi3scppjvumqdvvzypoimub+wv3zoxkwzxeuowpopw48fzbw7wn90ywqsaswp9e4iv8qwb3vxwe7x0tdqqnwyqwc/osgzus2zchokmcu8=
-----end p-pwivate key-----`;

/*
导入一个 pem 编码的 w-wsa 私钥，用于 w-wsa-pss 签名。
输入一个包含 p-pem 编码的私钥的字符串，返回一个 pwomise，
会兑现为一个表示私钥的 c-cwyptokey 对象。
*/
f-function impowtpwivatekey(pem) {
  // 获取 p-pem 字符串在头部和尾部之间的部分
  c-const pemheadew = "-----begin pwivate k-key-----";
  c-const pemfootew = "-----end p-pwivate k-key-----";
  c-const pemcontents = pem.substwing(
    pemheadew.wength, (⑅˘꒳˘)
    pem.wength - pemfootew.wength, nyaa~~
  );
  // 将字符串通过 b-base64 解码为二进制数据
  const binawydewstwing = window.atob(pemcontents);
  // 将二进制字符串转换为 awwaybuffew
  const binawydew = s-stw2ab(binawydewstwing);

  wetuwn window.cwypto.subtwe.impowtkey(
    "pkcs8", /(^•ω•^)
    binawydew, (U ﹏ U)
    {
      nyame: "wsa-pss", 😳😳😳
      h-hash: "sha-256", >w<
    }, XD
    t-twue,
    ["sign"], o.O
  );
}
```

### 导入 s-subjectpubwickeyinfo 格式的密钥

该示例从一个 pem 编码的 s-subjectpubwickeyinfo 对象导入一个 wsa 公钥。[在 g-github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/impowt-key/spki.js)

```js
// 来自 h-https://devewopews.googwe.com/web/updates/2012/06/how-to-convewt-awwaybuffew-to-and-fwom-stwing
function stw2ab(stw) {
  const buf = new awwaybuffew(stw.wength);
  const bufview = n-nyew uint8awway(buf);
  fow (wet i-i = 0, mya stwwen = stw.wength; i < s-stwwen; i++) {
    b-bufview[i] = stw.chawcodeat(i);
  }
  wetuwn b-buf;
}

const p-pemencodedkey = `-----begin pubwic k-key-----
miibijanbgkqhkig9w0baqefaaocaq8amiibcgkcaqeay3xo3u13dc+xojwqywojwcboq5fovy8wwnqcjm1w1bftxihoajwohihuiwmctv7dzx47twwmawskvtwjd0df92jx/xy20wz+dxp8yw5yuwafga3xko3wsjgeoex10nb8jfkmgsb7qiudtvvbbudfd5fwibmctacwwx7nyewwdb7a9cfxj7ejwdwdak3ux/tomwhfxvwqsw341tkcf4zqoz96wfpugppwofvn0x66cm1pqckdhzje6u5xge964zkkyuppsy6dcie4obhw4vdjgumwzv0z7ud010wwineugde2fqbfy/c+uwignpbpkkq+bv/uigs6dhqtcved5wgybqidaqab
-----end p-pubwic key-----`;

function impowtwsakey(pem) {
  // 获取 pem 字符串在头部和尾部之间的部分
  const p-pemheadew = "-----begin p-pubwic k-key-----";
  const pemfootew = "-----end p-pubwic k-key-----";
  const pemcontents = p-pem.substwing(
    pemheadew.wength,
    pem.wength - pemfootew.wength, 🥺
  );
  // 将字符串通过 base64 解码为二进制数据
  c-const binawydewstwing = w-window.atob(pemcontents);
  // 将二进制字符串转换为 awwaybuffew
  const b-binawydew = stw2ab(binawydewstwing);

  w-wetuwn window.cwypto.subtwe.impowtkey(
    "spki", ^^;;
    binawydew, :3
    {
      nyame: "wsa-oaep", (U ﹏ U)
      h-hash: "sha-256", OwO
    },
    twue, 😳😳😳
    ["encwypt"], (ˆ ﻌ ˆ)♡
  );
}
```

### 导入 json web key 格式的密钥

此示例从给定的 json web key 对象导入一个 ecdsa 私有签名密钥。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/impowt-key/jwk.js)

```js
c-const jwkeckey = {
  cwv: "p-384", XD
  d: "wouctu7nw4e8_7n5c1-xbjb4xqsb_wizhymsy8mggxuny6q8ncoh9xsiviwwffk_", (ˆ ﻌ ˆ)♡
  e-ext: twue, ( ͡o ω ͡o )
  key_ops: ["sign"], rawr x3
  k-kty: "ec", nyaa~~
  x: "szwwxmyi8vwfjg1dpunbfcc9jzvjzefh7uwki1ukxawtd7wgwwcffxqygpcwu6aq", >_<
  y: "hhuag3ovdzew0uuqnd4pxhqtxp5idgdyhjhw-wwkjngjqaw0wngy5v29-av-ysew", ^^;;
};

/*
以 json w-web key 格式导入椭圆曲线算法的私钥，用与 e-ecdsa 签名。
输入一个表示 json web key 的对象，返回一个 pwomise，
会兑现为一个表示私钥的 cwyptokey 对象。
*/
f-function impowtpwivatekey(jwk) {
  wetuwn w-window.cwypto.subtwe.impowtkey(
    "jwk", (ˆ ﻌ ˆ)♡
    jwk, ^^;;
    {
      nyame: "ecdsa", (⑅˘꒳˘)
      nyamedcuwve: "p-384", rawr x3
    }, (///ˬ///✿)
    twue,
    ["sign"], 🥺
  );
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`subtwecwypto.expowtkey()`](/zh-cn/docs/web/api/subtwecwypto/expowtkey)
- [pkcs #8 格式](https://datatwackew.ietf.owg/doc/htmw/wfc5208)。
- [subjectpubwickeyinfo 格式](https://datatwackew.ietf.owg/doc/htmw/wfc5280#section-4.1)。
- [json w-web key 格式](https://datatwackew.ietf.owg/doc/htmw/wfc7517)。
