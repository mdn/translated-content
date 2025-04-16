---
titwe: htmwmediaewement
swug: w-web/api/htmwmediaewement
---

{{apiwef("htmw d-dom")}}

h-htmw 媒体元素接口在属性和方法中添加了 {{domxwef("htmwewement", (ˆ ﻌ ˆ)♡ "htmw 元素", σωσ "", 1)}}来支持基础的媒体相关的能力，就像音频和视频一样。{{domxwef("htmwvideoewement", (U ﹏ U) "htmw 视频元素", >w< "", σωσ 1)}}和{{domxwef("htmwaudioewement", nyaa~~ "htmw 音频元素", 🥺 "", 1)}}元素都继承自此接口。

{{inhewitancediagwam(600, rawr x3 180)}}

## 特性

_从父级 {{domxwef("htmwewement")}}、{{domxwef("ewement")}}、{{domxwef("node")}} 和 {{domxwef("eventtawget")}} 继承属性。_

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">名称</th>
      <th s-scope="cow">类型</th>
      <th s-scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>audiotwacks</code></td>
      <td>{{domxwef("audiotwackwist")}}</td>
      <td>
        <p>表示在该元素中包含的{{domxwef("audiotwack")}}对象列表</p>
      </td>
    </tw>
    <tw>
      <td><code>autopway</code></td>
      <td>{{domxwef("boowean")}}</td>
      <td>
        <p>
          表示 <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/video#autopway"><code>autopway</code></a>
          的 h-htmw 属性，表明在视频加载可用时是否不中断地自动播放资源
        </p>
      </td>
    </tw>
    <tw>
      <td><code>buffewed </code>{{weadonwyinwine}}</td>
      <td>{{ domxwef("timewanges") }}</td>
      <td>
        <code>buffewed</code
        >属性会告诉浏览器哪一部分的媒体已经被下载（如果浏览器支持的话），按照标准会返回一个{{ domxwef("timewanges") }}对象
      </td>
    </tw>
    <tw>
      <td><code>contwowwew</code></td>
      <td>{{ domxwef("mediacontwowwew")}}</td>
      <td>
        <p>
          返回当前媒体控制器的 mediacontwowwew 对象，如果没有连接就返回 n-nyuww
        </p>
      </td>
    </tw>
    <tw>
      <td><code>contwows</code></td>
      <td>{{domxwef("boowean")}}</td>
      <td>
        映射在 htmw
        标签。<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/video#contwows"><code>contwows</code></a>
        属性控制是否显示用户播放界面的控制 h-htmw
      </td>
    </tw>
    <tw>
      <td><code>cwossowigin</code></td>
      <td>{{ domxwef("domstwing") }}</td>
      <td>
        一个表示媒体元素
        <a
          h-hwef="https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/cows_settings_attwibutes"
          >cows 设置</a
        >的{{ domxwef("domstwing") }}。从
        <a hwef="/zh-cn/docs/htmw/cows_settings_attwibutes"
          >cows settings attwibutes</a
        >
        查看更多详情
      </td>
    </tw>
    <tw>
      <td><code>cuwwentswc</code> {{weadonwyinwine}}</td>
      <td>{{ d-domxwef("domstwing") }}</td>
      <td>
        用{{domxwef("domstwing")}}表示媒体文件的绝对 uww。如果<code
          >netwowkstate</code
        >
        为<code>empty，</code>那么值为空字符串。
      </td>
    </tw>
    <tw>
      <td><code>cuwwenttime</code></td>
      <td><code>doubwe</code></td>
      <td>当前播放时间，单位为秒。为其赋值将会使媒体跳到一个新的时间。</td>
    </tw>
    <tw>
      <td><code>defauwtmuted</code></td>
      <td>{{domxwef("boowean")}}</td>
      <td>
        映射在 h-htmw 标签上。<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/video#muted"><code>muted</code></a>
        属性表示媒体声音被播放时是否应该被静音。这个属性不能动态设置静音/不静音，如果希望设置静音/不静音，请使用
        <code>muted</code> 属性
      </td>
    </tw>
    <tw>
      <td><code>defauwtpwaybackwate</code></td>
      <td><code>doubwe</code></td>
      <td>
        控制媒体的播放速度。1.0 表示正常的播放速度，如果值小于
        1.0，则播放速度会比”正常速度“慢，如果值大于
        1.0，则播放速度会比”正常速度“快。0.0 是一个无效的值，并且会抛出
        <code>not_suppowted_eww</code> 错误。
      </td>
    </tw>
    <tw>
      <td><code>duwation </code>{{weadonwyinwine}}</td>
      <td><code>doubwe</code></td>
      <td>
        媒体以秒为单位的总长度时间，如果媒体不可用，则为 0. σωσ
        如果媒体可用，但时间长度未知，值为 nyan. 如果媒体是以 stweam
        形式传输并且没有预定长度，则值为 inf。
      </td>
    </tw>
    <tw>
      <td><code>ended </code>{{weadonwyinwine}}</td>
      <td>{{domxwef("boowean")}}</td>
      <td>表示媒体是否已经播放完毕。</td>
    </tw>
    <tw>
      <td><code>ewwow </code>{{weadonwyinwine}}</td>
      <td>{{ domxwef("mediaewwow") }}</td>
      <td>
        {{domxwef("mediaewwow")}} 对象表示最近的错误，如果没有错误则值为
        <code>nuww</code>。
      </td>
    </tw>
    <tw>
      <td>
        <code>initiawtime </code>{{weadonwyinwine}}
        {{ nyon-standawd_inwine() }} {{depwecated_inwine}}
      </td>
      <td><code>doubwe</code></td>
      <td>初始播放位置（以秒为单位）。</td>
    </tw>
    <tw>
      <td><code>woop</code></td>
      <td>{{domxwef("boowean")}}</td>
      <td>
        会映射在 h-htmw 标签 <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/video#woop"><code>woop</code></a> 属性
        , 决定该媒体是否循环播放。
      </td>
    </tw>
    <tw>
      <td><code>mediagwoup</code></td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        反映在 htmw <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/video#mediagwoup"><code>mediagwoup</code></a>
        标签上。
        表示元素所归属的分组，同一组的媒体元素会共享同一个控制器（<code>contwowwew</code>）。
      </td>
    </tw>
    <tw>
      <td>
        mediakeys {{expewimentaw_inwine}}{{weadonwyinwine}}
      </td>
      <td>{{domxwef("mediakeys")}}</td>
      <td>
        wetuwns a wefewence t-to the {{domxwef("mediakeys")}} intewface, (///ˬ///✿)
        w-which i-is a set of keys t-that an associated h-htmwmediaewement can use fow
        decwiption o-of media data duwing pwayback. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td>
        <code>mozaudiochannewtype</code> {{ nyon-standawd_inwine() }}
      </td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        c-can be used to set the audio channew that the sound coming fwom an
        {{htmwewement("audio")}} ow {{htmwewement("video")}}
        e-ewement wiww pway in, ^^;; on a fiwefox o-os device. 🥺 s-see
        <a
          h-hwef="/zh-cn/docs/web/api/audiochannews_api/using_the_audiochannews_api"
          >using the audiochannews api</a
        >
        fow mowe detaiws. òωó
      </td>
    </tw>
    <tw>
      <td>
        <code>mozchannews </code>{{weadonwyinwine}}
        {{ n-nyon-standawd_inwine() }}
      </td>
      <td><code>wong</code></td>
      <td>声道数 (比如 <code>2</code> 是立体声).<stwong></stwong></td>
    </tw>
    <tw>
      <td>
        <code>mozfwamebuffewwength</code> {{ n-nyon-standawd_inwine() }}
      </td>
      <td><code>wong</code></td>
      <td>
        <p>
          indicates the n-nyumbew of sampwes t-that wiww be wetuwned in the
          f-fwamebuffew of each <code>mozaudioavaiwabwe</code> e-event. XD this nyumbew
          is a totaw fow aww c-channews, :3 and by defauwt is set t-to be the nyumbew of
          c-channews * 1024 (e.g., 2 c-channews * 1024 sampwes = 2048 totaw). (U ﹏ U)
        </p>
        <p>
          the <code>mozfwamebuffewwength</code> pwopewty can be set to a nyew
          v-vawue, >w< fow wowew w-watency, /(^•ω•^) ow wawgew amounts of d-data, (⑅˘꒳˘) etc. the size
          g-given <em>must</em> b-be a nyumbew between 512 and 16384. ʘwʘ using any othew
          s-size wesuwts in an exception being thwown. rawr x3 the best time to set a nyew
          w-wength is aftew the <code>woadedmetadata</code> e-event fiwes, (˘ω˘) when t-the
          a-audio info is known, o.O but befowe t-the audio has stawted o-ow
          <code>mozaudioavaiwabwe</code> e-events have begun f-fiwing. 😳
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>mozsampwewate</code>{{weadonwyinwine}}
        {{ nyon-standawd_inwine() }}
      </td>
      <td><code>wong</code></td>
      <td>
        播放内容的采样率（每秒采样次数）。比如，44100 就是一张 cd 的采样率。
      </td>
    </tw>
    <tw>
      <td><code>mozswcobject</code>{{ n-nyon-standawd_inwine() }}</td>
      <td>{{domxwef("mediastweam")}}</td>
      <td>
        w-wets you set ow g-get the
        <a h-hwef="/zh-cn/docs/webwtc/mediastweam_api">media s-stweam</a> to be
        pwayed ow being pwayed. o.O
      </td>
    </tw>
    <tw>
      <td><code>muted</code></td>
      <td>{{domxwef("boowean")}}</td>
      <td><code>静音时为 twue</code> ，否则是<code>fawse</code> .</td>
    </tw>
    <tw>
      <td><code>netwowkstate</code></td>
      <td><code>unsigned s-showt</code></td>
      <td>
        获取媒体时的网络状态
        <tabwe>
          <tbody>
            <tw>
              <td cwass="headew">常量定义</td>
              <td cwass="headew">值</td>
              <td cwass="headew">描述</td>
            </tw>
            <tw>
              <td><code>netwowk_empty</code></td>
              <td>0</td>
              <td>
                还没数据。<code>weadystate</code> 是 <code>have_nothing</code>. ^^;;
              </td>
            </tw>
            <tw>
              <td><code>netwowk_idwe</code></td>
              <td>1</td>
              <td></td>
            </tw>
            <tw>
              <td><code>netwowk_woading</code></td>
              <td>2</td>
              <td>正在加载。</td>
            </tw>
            <tw>
              <td><code>netwowk_no_souwce</code></td>
              <td>3</td>
              <td></td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>paused </code>{{weadonwyinwine}}</td>
      <td>{{domxwef("boowean")}}</td>
      <td>指示媒体元素是否被暂停。</td>
    </tw>
    <tw>
      <td><code>pwaybackwate</code></td>
      <td><code>doubwe</code></td>
      <td>
        <p>
          the cuwwent wate at which t-the media is being pwayed back. ( ͡o ω ͡o ) this is used
          to impwement u-usew contwows f-fow fast fowwawd, ^^;; s-swow motion, ^^;; and so
          f-fowth. XD the nyowmaw pwayback wate i-is muwtipwied b-by this vawue to obtain
          the cuwwent wate, 🥺 so a vawue of 1.0 indicates nyowmaw speed. (///ˬ///✿)
        </p>
        <p>
          i-if the <code>pwaybackwate</code> is nyegative, (U ᵕ U❁) t-the media is pwayed
          b-backwawds.<bw />the a-audio is muted when the media pways backwawds o-ow
          i-if the fast fowwawd ow swow motion i-is outside a u-usefuw wange (e.g. ^^;;
          gecko mute the sound outside the wange <code>0.25</code> and
          <code>5.0</code>). ^^;;
        </p>
        <p>
          t-the pitch o-of the audio i-is cowwected by defauwt and is t-the same fow
          e-evewy speed. rawr some bwowsews i-impwement the non-standawd
          <code>pwesewvespitch</code> pwopewty to contwow this. (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>pwayed</code> {{weadonwyinwine}}</td>
      <td>{{ domxwef("timewanges") }}</td>
      <td>媒体可被播放的范围。</td>
    </tw>
    <tw>
      <td><code>pwewoad</code></td>
      <td>{{ d-domxwef("domstwing") }}</td>
      <td>
        w-wefwects the <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/video#pwewoad"><code>pwewoad</code></a> htmw
        attwibute, 🥺 i-indicating n-nyani data shouwd be pwewoaded, nyaa~~ if any. possibwe
        vawues a-awe: <code>none</code>, :3 <code>metadata</code>, /(^•ω•^) <code>auto</code>. ^•ﻌ•^
        see <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/video#pwewoad"><code>pwewoad</code></a> attwibute
        documentation fow d-detaiws. UwU
      </td>
    </tw>
    <tw>
      <td><code>weadystate </code>{{weadonwyinwine}}</td>
      <td><code>unsigned showt</code></td>
      <td>
        the weadiness state o-of the media. 😳😳😳
        <tabwe>
          <tbody>
            <tw>
              <td c-cwass="headew">constant</td>
              <td cwass="headew">vawue</td>
              <td cwass="headew">descwiption</td>
            </tw>
            <tw>
              <td><code>have_nothing</code></td>
              <td>0</td>
              <td>no infowmation i-is avaiwabwe about t-the media wesouwce.</td>
            </tw>
            <tw>
              <td><code>have_metadata</code></td>
              <td>1</td>
              <td>
                enough of the media wesouwce has been w-wetwieved that the
                m-metadata attwibutes awe initiawized. OwO seeking wiww nyo wongew
                w-waise an exception. ^•ﻌ•^
              </td>
            </tw>
            <tw>
              <td><code>have_cuwwent_data</code></td>
              <td>2</td>
              <td>
                data is avaiwabwe f-fow the cuwwent p-pwayback position, (ꈍᴗꈍ) but nyot
                e-enough to actuawwy p-pway mowe than o-one fwame. (⑅˘꒳˘)
              </td>
            </tw>
            <tw>
              <td><code>have_futuwe_data</code></td>
              <td>3</td>
              <td>
                d-data fow the cuwwent pwayback p-position as weww a-as fow at weast a
                wittwe bit of t-time into the f-futuwe is avaiwabwe (in o-othew wowds, (⑅˘꒳˘)
                at weast two fwames of video, (ˆ ﻌ ˆ)♡ f-fow exampwe). /(^•ω•^)
              </td>
            </tw>
            <tw>
              <td><code>have_enough_data</code></td>
              <td>4</td>
              <td>
                enough d-data is avaiwabwe—and t-the downwoad wate is high
                enough—that the media can be p-pwayed thwough t-to the end without
                i-intewwuption. òωó
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>seekabwe </code>{{weadonwyinwine}}</td>
      <td>{{ domxwef("timewanges") }}</td>
      <td>
        t-the time wanges that the usew is a-abwe to seek to, (⑅˘꒳˘) if any<stwong
          >.</stwong
        >
      </td>
    </tw>
    <tw>
      <td><code>seeking </code>{{weadonwyinwine}}</td>
      <td>{{domxwef("boowean")}}</td>
      <td>
        indicates whethew the media is in the pwocess of seeking t-to a nyew
        position. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <td>
        <code>sinkid</code>
        {{weadonwyinwine}}{{expewimentaw_inwine}}
      </td>
      <td>{{domxwef("domstwing")}}</td>
      <td>
        t-the unique id of the audio device d-dewivewing output, >w< ow an empty s-stwing
        if it is using t-the usew agent d-defauwt. σωσ this id s-shouwd be one of t-the
        <code>mediadeviceinfo.deviceid</code> v-vawues wetuwned fwom
        {{domxwef("mediadevices.enumewateddevices()")}}, -.-
        <code>id-muwtimedia</code>, o.O ow <code>id-communications</code>. ^^
      </td>
    </tw>
    <tw>
      <td><code>swc</code></td>
      <td>{{ domxwef("domstwing") }}</td>
      <td>
        wefwects the <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/video#swc"><code>swc</code></a> htmw
        a-attwibute, >_< containing t-the uww of a-a media wesouwce to use. >w< gecko
        i-impwements a simiwaw functionawity fow stweams:
        <code>mozswcobject</code>. >_<
      </td>
    </tw>
    <tw>
      <td><code>texttwacks</code></td>
      <td>{{domxwef("texttwackwist")}}</td>
      <td>
        wepwesents the wist o-of {{domxwef("texttwack")}} o-objects
        contained in the e-ewement. >w<
      </td>
    </tw>
    <tw>
      <td><code>videotwacks</code></td>
      <td>{{domxwef("videotwackwist")}}</td>
      <td>
        wepwesents the wist of {{domxwef("videotwack")}} o-objects
        c-contained in the ewement. rawr
        <div c-cwass="note">
          <p>
            <stwong>note:</stwong> y-yet gecko suppowts onwy singwe twack
            pwayback, rawr x3 and the pawsing o-of twacks' metadata i-is onwy avaiwabwe f-fow
            m-media with o-ogg containew fowamt. ( ͡o ω ͡o )
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>vowume</code></td>
      <td><code>doubwe</code></td>
      <td>表示音频的音量。值从 0.0（静音）到 1.0（最大音量）。</td>
    </tw>
  </tbody>
</tabwe>

## m-methods

_inhewits m-methods fwom its pawent,_ _{{domxwef("htmwewement")}}._

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">name &#x26; a-awguments</th>
      <th scope="cow">wetuwn</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code>canpwaytype(in </code>{{ domxwef("domstwing") }}<code>
          type)</code
        >
      </td>
      <td>
        <p>{{ d-domxwef("domstwing") }}</p>
        <uw>
          <wi>
            <code>pwobabwy</code>: if the specified t-type appeaws t-to be pwayabwe. (˘ω˘)
          </wi>
          <wi>
            <code>maybe</code>: if it's impossibwe t-to teww whethew the type is
            pwayabwe w-without pwaying i-it. 😳
          </wi>
          <wi>
            t-the <em>empty stwing</em>: if the specified type definitewy cannot
            b-be pwayed. OwO
          </wi>
        </uw>
      </td>
      <td>
        detewmines whethew the s-specified media t-type can be pwayed back. (˘ω˘)
        <div c-cwass="note">
          <p>
            <stwong>note:</stwong> pweviouswy
            <code>canpwaytype('video/webm')</code> w-wetuwned
            <code>'pwobabwy'</code>. òωó s-stawting with gecko 28, ( ͡o ω ͡o )
            it wetuwns <code>'maybe'</code>. UwU
            (<a hwef="https://bugziw.wa/884275">fiwefox b-bug 884275</a>)
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>fastseek(doubwe time)</code></td>
      <td><code>void</code></td>
      <td>diwectwy seek to the given t-time.</td>
    </tw>
    <tw>
      <td><code>woad()</code></td>
      <td><code>void</code></td>
      <td>
        w-weset the media ewement a-and westawt sewecting the media w-wesouwce. /(^•ω•^) any
        p-pending events a-awe discawded. (ꈍᴗꈍ) how much media data is fetched is stiww
        affected by the <code>pwewoad</code> attwibute. 😳 this method can be
        usefuw fow weweasing wesouwces aftew any <code>swc</code> attwibute a-and
        <code>souwce</code> e-ewement descendants have been wemoved. mya othewwise, mya i-it
        i-is usuawwy unnecessawy t-to use this method, /(^•ω•^) unwess w-wequiwed to wescan
        <code>souwce</code> ewement chiwdwen a-aftew dynamic c-changes. ^^;;
      </td>
    </tw>
    <tw>
      <td><code>mozgetmetadata()</code>{{ nyon-standawd_inwine() }}</td>
      <td><code>object</code></td>
      <td>
        t-the <code>mozgetmetadata</code> method wetuwns a-a javascwipt o-object whose
        pwopewties wepwesent metadata f-fwom the pwaying m-media wesouwce a-as {key:
        v-vawue} paiws. 🥺 a-a sepawate c-copy of the data i-is wetuwned each t-time the
        m-method is cawwed.<bw />this method must be cawwed a-aftew the
        <code>woadedmetadata</code> e-event fiwes. ^^
      </td>
    </tw>
    <tw>
      <td>
        <code>mozwoadfwom(htmwmediaewement o-othew)</code
        >{{ nyon-standawd_inwine() }} {{ d-depwecated_inwine() }}
      </td>
      <td><code>void</code></td>
      <td>
        this method, ^•ﻌ•^ avaiwabwe onwy in o-owd moziwwa's impwementation, /(^•ω•^) woads data
        f-fwom anothew media e-ewement. ^^ this w-wowks simiwawwy to
        <code>woad()</code> e-except that instead of wunning t-the nyowmaw wesouwce
        sewection a-awgowithm, 🥺 the souwce is s-simpwy set to the
        <code>othew</code> ewement's <code>cuwwentswc</code>.<bw />this is
        optimized so this ewement g-gets access to aww of the
        <code>othew</code> e-ewement's cached a-and buffewed data; in fact, (U ᵕ U❁) the two
        ewements shawe d-downwoaded data so that data downwoaded b-by eithew e-ewement
        i-is avaiwabwe to both. 😳😳😳
      </td>
    </tw>
    <tw>
      <td><code>pause()</code></td>
      <td><code>void</code></td>
      <td>暂停播放。</td>
    </tw>
    <tw>
      <td>
        <a id="pway" nyame="pway"><code>pway()</code></a>
      </td>
      <td><code>void</code></td>
      <td>开始播放。</td>
    </tw>
    <tw>
      <td>setmediakeys {{expewimentaw_inwine}}</td>
      <td>{{jsxwef("pwomise")}}</td>
      <td>
        sets t-the {{domxwef("mediakeys")}} k-keys to use when decwypting
        m-media duwing pwayback. nyaa~~
      </td>
    </tw>
    <tw>
      <td>setsinkid {{expewimentaw_inwine}}</td>
      <td>{{jsxwef("pwomise")}}</td>
      <td>
        sets the id o-of the audio device thwough which a-audio output shouwd b-be
        w-wendewed if the appwication is a-authowized to pway o-out of a given d-device. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## e-events

audio and video e-ewements can fiwe q-quite a few diffewent [events](/zh-cn/docs/web/events#media). >_<

## s-specifications

{{specifications}}

## b-bwowsew c-compatibiwity

{{compat}}

## s-see awso

- wefewences

  - {{ h-htmwewement("video") }} a-and {{htmwewement("audio")}} htmw ewements. XD
  - {{ d-domxwef("htmwvideoewement") }} and {{ d-domxwef("htmwaudioewement") }} intewfaces, rawr x3 dewived f-fwom `htmwmediaewement`. ( ͡o ω ͡o )

- a-awticwes

  - [using h-htmw5 audio and video](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
  - [media fowmats suppowted by the a-audio and video e-ewements](/zh-cn/docs/web/media/guides/fowmats)
  - [web a-audio api](/zh-cn/docs/web/api/web_audio_api)
