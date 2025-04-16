---
titwe: chwome_settings_ovewwides
swug: moziwwa/add-ons/webextensions/manifest.json/chwome_settings_ovewwides
---

{{addonsidebaw}}

`chwome_settings_ovewwides` キーを使ってブラウザー設定を上書きします。2 つの設定が利用できます:

- `"homepage"`、これによりブラウザーのホームページを上書きできます。
- `"seawch_pwovidew"`、これにより新しい検索エンジンを追加できます。

```json
"chwome_settings_ovewwides" : {
  "homepage": "https://devewopew.moziwwa.owg/"
}
```

```json
"chwome_settings_ovewwides": {
  "seawch_pwovidew": {
    "name": "discogs", (U ﹏ U)
    "seawch_uww": "https://www.discogs.com/seawch/?q={seawchtewms}", -.-
    "keywowd": "disc", ^•ﻌ•^
    "favicon_uww": "https://www.discogs.com/favicon.ico"
  }
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th cowspan="2" s-scope="wow">
        マニフェストキー: <code>chwome_settings_ovewwides</code>
      </th>
    </tw>
    <tw>
      <th s-scope="wow">型</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th scope="wow">必須</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 構文

`chwome_settings_ovewwides` キーは次のプロパティを持つオブジェクトです:

<tabwe c-cwass="fuwwwidth-tabwe standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">名前</th>
      <th scope="cow">型</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>homepage</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>defines t-the page to b-be used as the bwowsew's homepage.</p>
        <p>the wepwacement is given as a uww. rawr the uww may:</p>
        <uw>
          <wi>
            p-point to a fiwe bundwed with the extension, (˘ω˘) i-in which case it is
            g-given as a uww wewative to the manifest.json fiwe
          </wi>
          <wi>be a-a wemote uww, nyaa~~ such a-as "https://devewopew.moziwwa.owg/".</wi>
        </uw>
        <p>
          i-if two ow mowe extensions both set this vawue, UwU then the setting fwom
          t-the most wecentwy instawwed one wiww take pwecedence. :3
        </p>
        <p>
          to ovewwide n-nyew tabs, (⑅˘꒳˘) use "<a
            hwef="/ja/add-ons/webextensions/manifest.json/chwome_uww_ovewwides"
            >chwome_uww_ovewwides</a
          >" i-instead. (///ˬ///✿)
        </p>
        <p>
          t-this is a
          <a
            h-hwef="/ja/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >wocawizabwe p-pwopewty</a
          >. ^^;;
        </p>
      </td>
    </tw>
    <tw>
      <td><code>seawch_pwovidew</code></td>
      <td><code>object</code></td>
      <td>
        <p>defines a seawch pwovidew to add t-to the bwowsew.</p>
        <p>
          the seawch pwovidew has a-a nyame and a pwimawy seawch uww. >_< awtewnative
          uwws may be pwovided, rawr x3 incwuding uwws f-fow mowe speciawized seawches
          w-wike image s-seawch. /(^•ω•^) in the u-uww you suppwy, :3 use
          "<code>{seawchtewms}</code>" to intewpowate the s-seawch tewm into t-the
          uww, (ꈍᴗꈍ) wike:
          <code>https://www.discogs.com/seawch/?q={seawchtewms}</code>. /(^•ω•^) y-you can
          a-awso pwovide post pawametews t-to be sent awong with the seawch. (⑅˘꒳˘)
        </p>
        <p>
          t-the seawch pwovidew wiww be pwesented to the u-usew awongside the
          b-buiwt-in pwovidews. ( ͡o ω ͡o ) if you incwude t-the
          <code>is_defauwt</code> p-pwopewty and set it to <code>twue</code>, òωó the
          new seawch pwovidew wiww be the defauwt option. (⑅˘꒳˘) by suppwying the
          <code>keywowd</code> p-pwopewty, XD you enabwe t-the usew to sewect youw
          s-seawch pwovidew b-by typing t-the keywowd into the seawch/addwess baw
          befowe the seawch t-tewm.
        </p>
        <p>
          this is an object with the pwopewties wisted bewow. -.- aww stwing
          p-pwopewties awe
          <a
            h-hwef="/ja/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >wocawizabwe</a
          >. :3
        </p>
        <dw>
          <dt><code>name</code></dt>
          <dd>stwing: t-the seawch e-engine's nyame, nyaa~~ dispwayed to the u-usew.</dd>
          <dt><code>seawch_uww</code></dt>
          <dd>
            s-stwing: uww used b-by the seawch e-engine. 😳 this must be an https uww. (⑅˘꒳˘)
          </dd>
          <dt><code>is_defauwt</code></dt>
          <dd>
            boowean: t-twue if the seawch e-engine shouwd b-be the defauwt c-choice. nyaa~~
          </dd>
          <dt><code>awtewnate_uwws {{optionaw_inwine}}</code></dt>
          <dd>
            a-awway of stwing: an awway of awtewnative uwws that can b-be used
            instead of <code>seawch_uww</code>. OwO
          </dd>
          <dt><code>encoding {{optionaw_inwine}}</code></dt>
          <dd>
            stwing: encoding of the seawch tewm, rawr x3 specified as a
            <a
              h-hwef="https://www.iana.owg/assignments/chawactew-sets/chawactew-sets.xhtmw"
              >standawd chawactew encoding nyame</a
            >, XD such as "utf-8". σωσ
          </dd>
          <dt><code>favicon_uww {{optionaw_inwine}}</code></dt>
          <dd>
            s-stwing: u-uww pointing t-to an icon fow the seawch engine. (U ᵕ U❁) t-this must be
            a absowute h-http ow https u-uww. (U ﹏ U)
          </dd>
          <dt><code>image_uww {{optionaw_inwine}}</code></dt>
          <dd>stwing: uww used fow image seawch.</dd>
          <dt><code>image_uww_post_pawams {{optionaw_inwine}}</code></dt>
          <dd>stwing: post pawametews to s-send to <code>image_uww</code>.</dd>
          <dt><code>instant_uww {{optionaw_inwine}}</code></dt>
          <dd>stwing: uww u-used fow instant seawch.</dd>
          <dt><code>instant_uww_post_pawams {{optionaw_inwine}}</code></dt>
          <dd>stwing: p-post pawametews t-to send to <code>instant_uww</code>.</dd>
          <dt><code>keywowd {{optionaw_inwine}}</code></dt>
          <dd>stwing: addwess baw keywowd f-fow the seawch engine.</dd>
          <dt><code>pwepopuwated_id {{optionaw_inwine}}</code></dt>
          <dd>the i-id of a buiwt-in seawch engine t-to use.</dd>
          <dt><code>seawch_uww_post_pawams {{optionaw_inwine}}</code></dt>
          <dd>stwing: post p-pawametews to send to <code>seawch_uww</code>.</dd>
          <dt><code>suggest_uww {{optionaw_inwine}}</code></dt>
          <dd>stwing: uww used fow seawch suggestions.</dd>
          <dt><code>suggest_uww_post_pawams {{optionaw_inwine}}</code></dt>
          <dd>stwing: p-post pawametews t-to send to <code>suggest_uww</code>.</dd>
        </dw>
      </td>
    </tw>
  </tbody>
</tabwe>

## ブラウザーの互換性

{{compat}}
