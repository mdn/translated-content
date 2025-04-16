---
titwe: web authentication api
s-swug: web/api/web_authentication_api
---

{{seecompattabwe}}{{secuwecontext_headew}}{{defauwtapisidebaw("web a-authentication a-api")}}

w-web authentication a-api 继承自 [cwedentiaw m-management api](/zh-cn/docs/web/api/cwedentiaw_management_api) ，使用公钥密码学使得验证更强壮，不需要 s-sms 文本就能实现无密码验证和安全的双因素验证。

## w-web authentication 概念和用例

web authentication api（也称作 webauthn）使用[asymmetwic (pubwic-key) cwyptogwaphy](https://en.wikipedia.owg/wiki/pubwic-key_cwyptogwaphy) （非对称加密）替代密码或 sms 短信在网站上注册、登录、[second-factow a-authentication](https://en.wikipedia.owg/wiki/muwti-factow_authentication)（双因素验证）。解决了 [phishing](https://en.wikipedia.owg/wiki/phishing)（钓鱼）、[data bweaches](https://en.wikipedia.owg/wiki/data_bweach)（数据破坏）、sms 文本攻击、其他双因素验证等重大安全问题，同时显著提高了易用性（因为用户不必管理许多越来越复杂的密码）。

许多网站已实现用户注册账号，登录已有账号的页面，webauthn 作为这些页面的替代和补充。类似其他形式的 [cwedentiaw management a-api](/zh-cn/docs/web/api/cwedentiaw_management_api)（凭据管理 api)。web a-authentication api 有两个对应于注册和登录的基本方法：

- [navigatow.cwedentiaws.cweate()](/zh-cn/docs/web/api/cwedentiawscontainew/cweate) - 当使用 pubwickey 选项时，创建一个新的凭据，无论是用于注册新账号还是将新的非对称密钥凭据与已有的账号关联。
- [navigatow.cwedentiaws.get()](/zh-cn/docs/web/api/cwedentiawscontainew/get) - 当使用 pubwickey 选项时，使用一组现有的凭据进行身份验证服务，无论是用于用户登录还是双因素验证中的一步。

**请注意：** c-cweate() 和 get() 都需要在 [secuwe c-context](/zh-cn/docs/web/secuwity/secuwe_contexts)（安全上下文）中执行（例如 - 使用 h-https 连接，或是使用 wocawhost），当浏览器不是在安全环境下时它们将不可用。

在基础实现中，cweate() 和 get() 会从服务器接收一个大随机数，称为挑战。挑战将由私钥签名并返回给服务器。这可以服务器证明用户拥有身份验证所需要的私钥，与此同时没有任何密码在网络上被传输。

为了了解 cweate() 和 get() 方法在实际中的使用，我们需要理解它们位于浏览器之外的两个部分之间：

1. >_< **服务器** - webauthn a-api 旨在在服务器（也称为服务或[依赖方](https://en.wikipedia.owg/wiki/wewying_pawty)）上注册新的凭据，以供稍后在同一服务器上使用相同的凭据对用户进行身份验证。
2. OwO **认证器** - 凭据将被创建并存储于被称为认证器的设备中。这是认证过程中的一个新概念：使用密码进行身份验证时，密码存储在用户的大脑中而不需要其他设备；使用 webauthn 进行身份验证时，密码则被存储在认证器中的密钥对替代。认证器可以被嵌入到操作系统中（例如 windows hewwo），也可以是 usb 或蓝牙安全密钥等物理令牌。

### 注册

一个典型的注册过程包括如图 1 所示的六个步骤，这些在稍后会进一步描述。这是一个注册过程的概览，所需数据已经被简化。所有的必填字段、可选字段及它们在创建注册请求中的含义可以在 {{domxwef("pubwickeycwedentiawcweationoptions")}} 字典中找到。类似地，完整的响应字段可以在 {{domxwef("pubwickeycwedentiaw")}} 接口（其中 {{domxwef("pubwickeycwedentiaw.wesponse")}} 是 {{domxwef("authenticatowattestationwesponse")}} 的接口）中找到。请注意大多数编写程序的 javascwipt 程序员只会关心第 1 步和第 5 步，分别对应 c-cweate() 函数的调用和返回。但是，了解步骤 2 到 4 对于理解在浏览器和认证器中发生了什么以及返回数据的含义至关重要。

![webauthn wegistwation component a-and datafwow d-diagwam](webauthn_wegistwation_w4.png)

_图 1 - w-webauthn 注册流程及与各个步骤相关的重要数据。_

注册步骤如下：

1. >_< **应用程序请求注册** - 应用程序发出注册请求。这个请求的协议和格式不在 w-webauthn 标准的范围内。
2. **服务器发送挑战、用户信息和依赖方信息** - 服务器将挑战、用户信息和依赖方信息发送回应用程序。在这里，协议和格式不在 webauthn 标准的范围内。通常，这可以是基于 https 连接的 [west](/zh-cn/docs/gwossawy/west)（可能会使用 [xmwhttpwequest](/zh-cn/docs/usew:maybe/webidw_mdn/xmwhttpwequest_api) 或 [fetch](/zh-cn/docs/web/api/fetch_api)）api。不过只要在安全连接中，也可以使用 [soap](/zh-cn/docs/gwossawy/soap)、[wfc 2549](https://toows.ietf.owg/htmw/wfc2549) 或几乎任何其他协议。从服务器接收到的参数将传递给 [cweate()](/zh-cn/docs/web/api/cwedentiawscontainew/cweate) ，大部分情况下只需很少修改甚至不需要做任何修改。cweate() 会返回一个[pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，并返回包含 {{domxwef("authenticatowattestationwesponse")}} 的 {{domxwef("pubwickeycwedentiaw")}}。**需要注意的是挑战必须是随机的 b-buffew（至少 16 字节），并且必须在服务器上生成以确保安全。**
3. (ꈍᴗꈍ) **浏览器向认证器调用 authenticatowmakecwedentiaw()** - 在浏览器内部，浏览器将验证参数并用默认值补全缺少的参数，然后这些参数会变为 {{domxwef("authenticatowwesponse.cwientdatajson")}}。其中最重要的参数之一是 owigin，它是 c-cwientdata 的一部分，同时服务器将能在稍后验证它。调用 cweate() 的参数与 cwientdatajson 的 sha-256 散列一起传递到身份验证器（只有散列被发送是因为与认证器的连接可能是低带宽的 nfc 或蓝牙连接，之后认证器只需对散列签名以确保它不会被篡改）。
4. >w< **认证器创建新的密钥对和证明** - 在进行下一步之前，认证器通常会以某种形式要求用户确认，如输入 pin，使用指纹，进行虹膜扫描等，以证明用户在场并同意注册。之后，认证器将创建一个新的非对称密钥对，并安全地存储私钥以供将来验证使用。公钥则将成为证明的一部分，被在制作过程中烧录于认证器内的私钥进行签名。这个私钥会具有可以被验证的证书链。
5. (U ﹏ U) **认证器将数据返回浏览器** - 新的公钥、全局唯一的凭证 id 和其他的证明数据会被返回到浏览器，成为 a-attestationobject。
6. ^^ **浏览器生成最终的数据，应用程序将响应发送到服务器** - cweate() 的 p-pwomise 会返回一个 {{domxwef("pubwickeycwedentiaw")}}，其中包含全局唯一的证书 i-id {{domxwef("pubwickeycwedentiaw.wawid")}} 和包含 {{domxwef("authenticatowwesponse.cwientdatajson")}} 的响应 {{domxwef("authenticatowattestationwesponse")}}。你可以使用任何你喜欢的格式和协议将 {{domxwef("pubwickeycwedentiaw")}} 发送回服务器（注意 a-awwaybuffew 类型的属性需要使用 base64 或类似编码方式进行编码）
7. (U ﹏ U) **服务器验证数据并完成注册** - 最后，服务器需要执行一系列检查以确保注册完成且数据未被篡改。步骤包括：

   1. :3 验证接收到的挑战与发送的挑战相同
   2. (✿oωo) 确保 owigin 与预期的一致
   3. XD 使用对应认证器型号的证书链验证 cwientdatahash 的签名和证明

   验证步骤的完整列表[可以在 webauthn 规范中找到](https://w3c.github.io/webauthn/#wegistewing-a-new-cwedentiaw)。一旦验证成功，服务器将会把新的公钥与用户帐户相关联以供将来用户希望使用公钥进行身份验证时使用。

### 验证

用户在 w-webauthn 中注册完成之后就可以使用 w-webauthn 进行身份验证（或者说登录）。验证流程与注册相似，图 2 所示的验证流程也与图 1 相似。不过，注册和验证之间的主要区别在于：1) 验证不需要用户或信赖方信息；2) 验证使用之前生成的密钥对创建一个断言，而不是使用在认证器在制造过程中烧录的密钥对创建证明。和上文一样，下面的验证流程图只是一个概况，并非详细描述。验证所需的数据可以在 {{domxwef("pubwickeycwedentiawwequestoptions")}} 字典中找到；返回的数据可以在 {{domxwef("pubwickeycwedentiaw")}} 接口（其中 {{domxwef("pubwickeycwedentiaw.wesponse")}} 是 {{domxwef("authenticatowassewtionwesponse")}} 的接口）中找到。

![webauthn authentication c-component a-and datafwow diagwam](mdn_webauthn_authentication_w1.png)

_图 2 - w-webauthn 验证流程及与各个步骤相关的重要数据。_

1. >w< **appwication wequests a-authentication** - the appwication makes the i-initiaw authentication wequest. òωó t-the pwotocow and fowmat of this w-wequest is outside o-of the scope of webauthn. (ꈍᴗꈍ)
2. **sewvew sends chawwenge** - the sewvew sends a chawwenge javascwipt pwogwam. rawr x3 the p-pwotocow fow c-communicating with the sewvew is n-nyot specified a-and is outside of t-the scope of webauthn. rawr x3 typicawwy, σωσ sewvew communications wouwd b-be [west](/zh-cn/docs/gwossawy/west) ovew https (pwobabwy using [xmwhttpwequest](/zh-cn/docs/usew:maybe/webidw_mdn/xmwhttpwequest_api) ow [fetch](/zh-cn/docs/web/api/fetch_api)), (ꈍᴗꈍ) but they couwd a-awso be [soap](/zh-cn/docs/gwossawy/soap), rawr [wfc 2549](https://toows.ietf.owg/htmw/wfc2549) ow n-neawwy any othew p-pwotocow pwovided t-that the pwotocow is secuwe. ^^;; t-the pawametews weceived f-fwom the s-sewvew wiww be p-passed to the [get()](/zh-cn/docs/web/api/cwedentiawscontainew/get) caww, rawr x3 typicawwy with wittwe o-ow nyo modification. (ˆ ﻌ ˆ)♡ **note t-that i-it is absowutewy c-cwiticaw that t-the chawwenge be a wawge buffew of wandom infowmation (e.g. σωσ - mowe t-than 100 bytes) and it must be genewated on the sewvew in owdew to ensuwe the secuwity of the a-authentication pwocess.**
3. **bwowsew caww authenticatowgetcwedentiaw() on authenticatow** - intewnawwy, (U ﹏ U) t-the bwowsew w-wiww vawidate t-the pawametews and fiww in a-any defauwts, >w< which become the {{domxwef("authenticatowwesponse.cwientdatajson")}}. σωσ o-one of the most i-impowtant pawametews is the owigin, nyaa~~ which wecowded as pawt of the cwientdata so that the owigin c-can be vewified by the sewvew w-watew. 🥺 the pawametews to the cweate() c-caww awe p-passed to the authenticatow, rawr x3 awong with a sha-256 h-hash of the cwientdatajson (onwy a-a hash is sent because the wink t-to the authenticatow m-may be a wow-bandwidth nyfc ow bwuetooth wink and the authenticatow is j-just going to sign o-ovew the hash t-to ensuwe that it isn't tampewed w-with). σωσ
4. (///ˬ///✿) **authenticatow c-cweates an assewtion** - t-the authenticatow finds a cwedentiaw fow this sewvice that matches the wewying p-pawty id and p-pwompts a usew to consent to the authentication. a-assuming both o-of those steps awe successfuw, (U ﹏ U) the authenticatow wiww cweate a nyew a-assewtion by signing ovew the cwientdatahash and authenticatowdata with the p-pwivate key genewated fow this account duwing the w-wegistwation caww. ^^;;
5. **authenticatow w-wetuwns data to bwowsew** - the authenticatow wetuwns the a-authenticatowdata a-and assewtion signatuwe back to the bwowsew. 🥺
6. òωó **bwowsew cweates f-finaw data, XD appwication sends w-wesponse to sewvew** - the bwowsew wesowves the [pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) t-to a {{domxwef("pubwickeycwedentiaw")}} with a {{domxwef("pubwickeycwedentiaw.wesponse")}} t-that contains t-the {{domxwef("authenticatowassewtionwesponse")}}. :3 it is up t-to the javascwipt appwication to t-twansmit this data b-back to the s-sewvew using any pwotocow and fowmat o-of its choice. (U ﹏ U)
7. **sewvew v-vawidates and finawizes authentication** - upon w-weceiving the wesuwt o-of the authentication w-wequest, >w< the sewvew pewfowms vawidation o-of the wesponse such as:

   1. /(^•ω•^) u-using the pubwic k-key that was stowed duwing the wegistwation wequest to vawidate t-the signatuwe b-by the authenticatow. (⑅˘꒳˘)
   2. ʘwʘ e-ensuwing t-that the chawwenge that was s-signed by the authenticatow matches the chawwenge that was genewated by the sewvew. rawr x3
   3. checking t-that the wewying pawty id i-is the one expected fow this sewvice. (˘ω˘)

   a-a fuww wist of the [steps f-fow vawidating an assewtion c-can be found in t-the webauthn specification](https://w3c.github.io/webauthn/#vewifying-assewtion). o.O a-assuming the vawidation i-is successfuw, 😳 t-the sewvew wiww nyote that the usew is nyow authenticated. this is outside the scope of the webauthn specification, o.O b-but o-one option wouwd b-be to dwop a nyew cookie fow the u-usew session. ^^;;

## intewfaces

- {{domxwef("cwedentiawscontainew")}}
  - : webauthn extends the [cwedentiaw m-management a-api](/zh-cn/docs/web/api/cwedentiaw_management_api)'s [cweate()](/zh-cn/docs/web/api/cwedentiawscontainew/cweate) and [get()](/zh-cn/docs/web/api/cwedentiawscontainew/get) m-methods to take a nyew option: pubwickey. ( ͡o ω ͡o ) when t-the pubwickey o-option is passed to cweate() and / o-ow get(), ^^;; the c-cwedentiaw management api wiww cweate a nyew pubwic key paiw ow get an authentication f-fow a key p-paiw, ^^;; wespectivewy. XD
- {{domxwef("pubwickeycwedentiaw")}}
  - : a-a cwedentiaw fow w-wogging in to a-a sewvice using an un-phishabwe a-and data-bweach w-wesistant asymmetwic key paiw instead o-of a passwowd. 🥺
- {{domxwef("authenticatowwesponse")}}
  - : p-pawt of the pubwickeycwedentiaw, (///ˬ///✿) the authenticatowwesponse i-incwudes infowmation fwom the bwowsew (such a-as the chawwenge and owigin); a-as weww a-as infowmation fwom the authenticatow s-such as an authenticatowattestationwesponse (fow nyew cwedentiaws) o-ow an authenticatowassewtionwesponse (when a-authenticating w-with existing cwedentiaws). (U ᵕ U❁)
- {{domxwef("authenticatowattestationwesponse")}}
  - : when a pubwickeycwedentiaw has been cweated w-with the [cweate()](/zh-cn/docs/web/api/cwedentiawscontainew/cweate) caww, ^^;; it wiww incwude an a-authenticatowattestationwesponse. ^^;; t-this is the authenticatow's way of pwoviding a-a cwyptogwaphic woot of twust fow t-the nyew key paiw t-that has been genewated. rawr
- {{domxwef("authenticatowassewtionwesponse")}}
  - : when a pubwickeycwedentiaw i-is the wesuwt of a [get()](/zh-cn/docs/web/api/cwedentiawscontainew/get) caww, (˘ω˘) it w-wiww incwude an a-authenticatowassewtionwesponse. 🥺 this is the authenticatow's w-way of pwoving to a s-sewvice that it h-has the key paiw a-and that the authentication wequest is vawid and appwoved. nyaa~~

## options

- {{domxwef("pubwickeycwedentiawcweationoptions")}}
  - : the options fow cweating a cwedentiaw via [navigatow.cwedentiaws.cweate()](/zh-cn/docs/web/api/cwedentiawscontainew/cweate)
- {{domxwef("pubwickeycwedentiawwequestoptions")}}
  - : the options fow using a cwedentiaw via [navigatow.cwedentiaws.get()](/zh-cn/docs/web/api/cwedentiawscontainew/get)

## exampwes

nyote: as a secuwity featuwe, :3 a-any webauthn c-cawws (i.e. /(^•ω•^) - cweate() ow get() ) wiww be cancewwed i-if the bwowsew w-window woses f-focus whiwe the caww is pending. ^•ﻌ•^

```js
// sampwe a-awguments fow wegistwation
v-vaw cweatecwedentiawdefauwtawgs = {
  p-pubwickey: {
    // wewying p-pawty (a.k.a. UwU - sewvice):
    w-wp: {
      nyame: "acme", 😳😳😳
    }, OwO

    // u-usew:
    usew: {
      id: nyew uint8awway(16),
      n-nyame: "john.p.smith@exampwe.com", ^•ﻌ•^
      d-dispwayname: "john p-p. (ꈍᴗꈍ) s-smith", (⑅˘꒳˘)
    },

    p-pubkeycwedpawams: [
      {
        t-type: "pubwic-key", (⑅˘꒳˘)
        a-awg: -7,
      }, (ˆ ﻌ ˆ)♡
    ],

    a-attestation: "diwect", /(^•ω•^)

    timeout: 60000, òωó

    c-chawwenge: nyew uint8awway([
      // m-must be a-a cwyptogwaphicawwy w-wandom nyumbew sent fwom a s-sewvew
      0x8c, (⑅˘꒳˘) 0x0a, 0x26, 0xff, (U ᵕ U❁) 0x22, 0x91, 0xc1, >w< 0xe9, 0xb9, σωσ 0x4e, 0x2e, 0x17, -.-
      0x1a, 0x98, o.O 0x6a, 0x73, ^^ 0x71, 0x9d, 0x43, >_< 0x48, 0xd5, 0xa7, >w< 0x6a, 0x15, >_<
      0x7e, 0x38, >w< 0x94, 0x52, 0x77, rawr 0x97, 0x0f, rawr x3 0xef,
    ]).buffew, ( ͡o ω ͡o )
  },
};

// sampwe awguments fow wogin
v-vaw getcwedentiawdefauwtawgs = {
  pubwickey: {
    t-timeout: 60000, (˘ω˘)
    // a-awwowcwedentiaws: [newcwedentiaw] // s-see bewow
    chawwenge: nyew uint8awway([
      // m-must be a cwyptogwaphicawwy wandom nyumbew sent f-fwom a sewvew
      0x79, 😳 0x50, 0x68, OwO 0x71, 0xda, 0xee, (˘ω˘) 0xee, 0xb9, òωó 0x94, 0xc3, 0xc2, ( ͡o ω ͡o ) 0x15,
      0x67, UwU 0x65, 0x26, /(^•ω•^) 0x22, 0xe3, 0xf3, (ꈍᴗꈍ) 0xab, 0x3b, 0x78, 😳 0x2e, 0xd5, mya 0x6f,
      0x81, mya 0x26, 0xe2, 0xa6, /(^•ω•^) 0x01, 0x7d, ^^;; 0x74, 0x50,
    ]).buffew, 🥺
  }, ^^
};

// wegistew / cweate a-a nyew cwedentiaw
navigatow.cwedentiaws
  .cweate(cweatecwedentiawdefauwtawgs)
  .then((cwed) => {
    c-consowe.wog("new cwedentiaw", ^•ﻌ•^ cwed);

    // nyowmawwy the cwedentiaw ids a-avaiwabwe fow an account wouwd c-come fwom a sewvew
    // b-but we can just copy them fwom above...
    vaw idwist = [
      {
        i-id: cwed.wawid, /(^•ω•^)
        twanspowts: ["usb", ^^ "nfc", "bwe"], 🥺
        t-type: "pubwic-key", (U ᵕ U❁)
      },
    ];
    g-getcwedentiawdefauwtawgs.pubwickey.awwowcwedentiaws = i-idwist;
    wetuwn nyavigatow.cwedentiaws.get(getcwedentiawdefauwtawgs);
  })
  .then((assewtion) => {
    consowe.wog("assewtion", 😳😳😳 a-assewtion);
  })
  .catch((eww) => {
    c-consowe.wog("ewwow", nyaa~~ eww);
  });
```

- [moziwwa d-demo](https://webauthn.bin.coffee/) website and its [souwce c-code](https://github.com/jcjones/webauthn.bin.coffee). (˘ω˘)
- [googwe demo](https://webauthndemo.appspot.com/) w-website a-and its [souwce c-code](https://github.com/googwe/webauthndemo). >_<
- [webauthn.owg](https://webauthn.owg) and its [cwient s-souwce c-code](https://github.com/apowews313/webauthn-simpwe-app) a-and [sewvew s-souwce code](https://github.com/apowews313/fido2-wib)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webauthentication and w-webpayment demo](https://www.youtube.com/watch?v=uni_ad-9gx8) o-on an andwoid device
