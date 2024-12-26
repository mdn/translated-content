---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
---

{{APIRef("HTML DOM")}}

HTML 媒体元素接口在属性和方法中添加了 {{domxref("HTMLElement", "HTML 元素", "", 1)}}来支持基础的媒体相关的能力，就像音频和视频一样。{{domxref("HTMLVideoElement", "HTML 视频元素", "", 1)}}和{{domxref("HTMLAudioElement", "HTML 音频元素", "", 1)}}元素都继承自此接口。

{{InheritanceDiagram(600, 180)}}

## 特性

_从父级 {{domxref("HTMLElement")}}、{{domxref("Element")}}、{{domxref("Node")}} 和 {{domxref("EventTarget")}} 继承属性。_

<table>
  <thead>
    <tr>
      <th scope="col">名称</th>
      <th scope="col">类型</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>audioTracks</code></td>
      <td>{{domxref("AudioTrackList")}}</td>
      <td>
        <p>表示在该元素中包含的{{domxref("AudioTrack")}}对象列表</p>
      </td>
    </tr>
    <tr>
      <td><code>autoplay</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        <p>
          表示 <a href="/zh-CN/docs/Web/HTML/Element/video#autoplay"><code>autoplay</code></a>
          的 HTML 属性，表明在视频加载可用时是否不中断地自动播放资源
        </p>
      </td>
    </tr>
    <tr>
      <td><code>buffered </code>{{readonlyinline}}</td>
      <td>{{ domxref("TimeRanges") }}</td>
      <td>
        <code>buffered</code
        >属性会告诉浏览器哪一部分的媒体已经被下载（如果浏览器支持的话），按照标准会返回一个{{ domxref("TimeRanges") }}对象
      </td>
    </tr>
    <tr>
      <td><code>controller</code></td>
      <td>{{ domxref("MediaController")}}</td>
      <td>
        <p>
          返回当前媒体控制器的 MediaController 对象，如果没有连接就返回 null
        </p>
      </td>
    </tr>
    <tr>
      <td><code>controls</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        映射在 HTML
        标签。<a href="/zh-CN/docs/Web/HTML/Element/video#controls"><code>controls</code></a>
        属性控制是否显示用户播放界面的控制 HTML
      </td>
    </tr>
    <tr>
      <td><code>crossOrigin</code></td>
      <td>{{ domxref("DOMString") }}</td>
      <td>
        一个表示媒体元素
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes"
          >CORS 设置</a
        >的{{ domxref("DOMString") }}。从
        <a href="/zh-CN/docs/HTML/CORS_settings_attributes"
          >CORS settings attributes</a
        >
        查看更多详情
      </td>
    </tr>
    <tr>
      <td><code>currentSrc</code> {{readonlyinline}}</td>
      <td>{{ domxref("DOMString") }}</td>
      <td>
        用{{domxref("DOMString")}}表示媒体文件的绝对 URL。如果<code
          >networkState</code
        >
        为<code>EMPTY，</code>那么值为空字符串。
      </td>
    </tr>
    <tr>
      <td><code>currentTime</code></td>
      <td><code>double</code></td>
      <td>当前播放时间，单位为秒。为其赋值将会使媒体跳到一个新的时间。</td>
    </tr>
    <tr>
      <td><code>defaultMuted</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        映射在 HTML 标签上。<a href="/zh-CN/docs/Web/HTML/Element/video#muted"><code>muted</code></a>
        属性表示媒体声音被播放时是否应该被静音。这个属性不能动态设置静音/不静音，如果希望设置静音/不静音，请使用
        <code>muted</code> 属性
      </td>
    </tr>
    <tr>
      <td><code>defaultPlaybackRate</code></td>
      <td><code>double</code></td>
      <td>
        控制媒体的播放速度。1.0 表示正常的播放速度，如果值小于
        1.0，则播放速度会比”正常速度“慢，如果值大于
        1.0，则播放速度会比”正常速度“快。0.0 是一个无效的值，并且会抛出
        <code>NOT_SUPPORTED_ERR</code> 错误。
      </td>
    </tr>
    <tr>
      <td><code>duration </code>{{readonlyinline}}</td>
      <td><code>double</code></td>
      <td>
        媒体以秒为单位的总长度时间，如果媒体不可用，则为 0.
        如果媒体可用，但时间长度未知，值为 NAN. 如果媒体是以 stream
        形式传输并且没有预定长度，则值为 Inf。
      </td>
    </tr>
    <tr>
      <td><code>ended </code>{{readonlyinline}}</td>
      <td>{{domxref("Boolean")}}</td>
      <td>表示媒体是否已经播放完毕。</td>
    </tr>
    <tr>
      <td><code>error </code>{{readonlyinline}}</td>
      <td>{{ domxref("MediaError") }}</td>
      <td>
        {{domxref("MediaError")}} 对象表示最近的错误，如果没有错误则值为
        <code>null</code>。
      </td>
    </tr>
    <tr>
      <td>
        <code>initialTime </code>{{readonlyinline}}
        {{ non-standard_inline() }} {{deprecated_inline}}
      </td>
      <td><code>double</code></td>
      <td>初始播放位置（以秒为单位）。</td>
    </tr>
    <tr>
      <td><code>loop</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        会映射在 HTML 标签 <a href="/zh-CN/docs/Web/HTML/Element/video#loop"><code>loop</code></a> 属性
        , 决定该媒体是否循环播放。
      </td>
    </tr>
    <tr>
      <td><code>mediaGroup</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        反映在 HTML <a href="/zh-CN/docs/Web/HTML/Element/video#mediagroup"><code>mediagroup</code></a>
        标签上。
        表示元素所归属的分组，同一组的媒体元素会共享同一个控制器（<code>controller</code>）。
      </td>
    </tr>
    <tr>
      <td>
        mediaKeys {{experimental_inline}}{{readonlyinline}}
      </td>
      <td>{{domxref("MediaKeys")}}</td>
      <td>
        Returns a reference to the {{domxref("MediaKeys")}} interface,
        which is a set of keys that an associated HTMLMediaElement can use for
        decription of media data during playback.
      </td>
    </tr>
    <tr>
      <td>
        <code>mozAudioChannelType</code> {{ non-standard_inline() }}
      </td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        Can be used to set the audio channel that the sound coming from an
        {{htmlelement("audio")}} or {{htmlelement("video")}}
        element will play in, on a Firefox OS device. See
        <a
          href="/zh-CN/docs/Web/API/AudioChannels_API/Using_the_AudioChannels_API"
          >Using the AudioChannels API</a
        >
        for more details.
      </td>
    </tr>
    <tr>
      <td>
        <code>mozChannels </code>{{readonlyinline}}
        {{ non-standard_inline() }}
      </td>
      <td><code>long</code></td>
      <td>声道数 (比如 <code>2</code> 是立体声).<strong></strong></td>
    </tr>
    <tr>
      <td>
        <code>mozFrameBufferLength</code> {{ non-standard_inline() }}
      </td>
      <td><code>long</code></td>
      <td>
        <p>
          Indicates the number of samples that will be returned in the
          framebuffer of each <code>MozAudioAvailable</code> event. This number
          is a total for all channels, and by default is set to be the number of
          channels * 1024 (e.g., 2 channels * 1024 samples = 2048 total).
        </p>
        <p>
          The <code>mozFrameBufferLength</code> property can be set to a new
          value, for lower latency, or larger amounts of data, etc. The size
          given <em>must</em> be a number between 512 and 16384. Using any other
          size results in an exception being thrown. The best time to set a new
          length is after the <code>loadedmetadata</code> event fires, when the
          audio info is known, but before the audio has started or
          <code>MozAudioAvailable</code> events have begun firing.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>mozSampleRate</code>{{readonlyinline}}
        {{ non-standard_inline() }}
      </td>
      <td><code>long</code></td>
      <td>
        播放内容的采样率（每秒采样次数）。比如，44100 就是一张 CD 的采样率。
      </td>
    </tr>
    <tr>
      <td><code>mozSrcObject</code>{{ non-standard_inline() }}</td>
      <td>{{domxref("MediaStream")}}</td>
      <td>
        Lets you set or get the
        <a href="/zh-CN/docs/WebRTC/MediaStream_API">Media Stream</a> to be
        played or being played.
      </td>
    </tr>
    <tr>
      <td><code>muted</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td><code>静音时为 true</code> ，否则是<code>false</code> .</td>
    </tr>
    <tr>
      <td><code>networkState</code></td>
      <td><code>unsigned short</code></td>
      <td>
        获取媒体时的网络状态
        <table>
          <tbody>
            <tr>
              <td class="header">常量定义</td>
              <td class="header">值</td>
              <td class="header">描述</td>
            </tr>
            <tr>
              <td><code>NETWORK_EMPTY</code></td>
              <td>0</td>
              <td>
                还没数据。<code>readyState</code> 是 <code>HAVE_NOTHING</code>.
              </td>
            </tr>
            <tr>
              <td><code>NETWORK_IDLE</code></td>
              <td>1</td>
              <td></td>
            </tr>
            <tr>
              <td><code>NETWORK_LOADING</code></td>
              <td>2</td>
              <td>正在加载。</td>
            </tr>
            <tr>
              <td><code>NETWORK_NO_SOURCE</code></td>
              <td>3</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>paused </code>{{readonlyinline}}</td>
      <td>{{domxref("Boolean")}}</td>
      <td>指示媒体元素是否被暂停。</td>
    </tr>
    <tr>
      <td><code>playbackRate</code></td>
      <td><code>double</code></td>
      <td>
        <p>
          The current rate at which the media is being played back. This is used
          to implement user controls for fast forward, slow motion, and so
          forth. The normal playback rate is multiplied by this value to obtain
          the current rate, so a value of 1.0 indicates normal speed.
        </p>
        <p>
          If the <code>playbackRate</code> is negative, the media is played
          backwards.<br />The audio is muted when the media plays backwards or
          if the fast forward or slow motion is outside a useful range (E.g.
          Gecko mute the sound outside the range <code>0.25</code> and
          <code>5.0</code>).
        </p>
        <p>
          The pitch of the audio is corrected by default and is the same for
          every speed. Some browsers implement the non-standard
          <code>preservespitch</code> property to control this.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>played</code> {{readonlyinline}}</td>
      <td>{{ domxref("TimeRanges") }}</td>
      <td>媒体可被播放的范围。</td>
    </tr>
    <tr>
      <td><code>preload</code></td>
      <td>{{ domxref("DOMString") }}</td>
      <td>
        Reflects the <a href="/zh-CN/docs/Web/HTML/Element/video#preload"><code>preload</code></a> HTML
        attribute, indicating what data should be preloaded, if any. Possible
        values are: <code>none</code>, <code>metadata</code>, <code>auto</code>.
        See <a href="/zh-CN/docs/Web/HTML/Element/video#preload"><code>preload</code></a> attribute
        documentation for details.
      </td>
    </tr>
    <tr>
      <td><code>readyState </code>{{readonlyinline}}</td>
      <td><code>unsigned short</code></td>
      <td>
        The readiness state of the media.
        <table>
          <tbody>
            <tr>
              <td class="header">Constant</td>
              <td class="header">Value</td>
              <td class="header">Description</td>
            </tr>
            <tr>
              <td><code>HAVE_NOTHING</code></td>
              <td>0</td>
              <td>No information is available about the media resource.</td>
            </tr>
            <tr>
              <td><code>HAVE_METADATA</code></td>
              <td>1</td>
              <td>
                Enough of the media resource has been retrieved that the
                metadata attributes are initialized. Seeking will no longer
                raise an exception.
              </td>
            </tr>
            <tr>
              <td><code>HAVE_CURRENT_DATA</code></td>
              <td>2</td>
              <td>
                Data is available for the current playback position, but not
                enough to actually play more than one frame.
              </td>
            </tr>
            <tr>
              <td><code>HAVE_FUTURE_DATA</code></td>
              <td>3</td>
              <td>
                Data for the current playback position as well as for at least a
                little bit of time into the future is available (in other words,
                at least two frames of video, for example).
              </td>
            </tr>
            <tr>
              <td><code>HAVE_ENOUGH_DATA</code></td>
              <td>4</td>
              <td>
                Enough data is available—and the download rate is high
                enough—that the media can be played through to the end without
                interruption.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>seekable </code>{{readonlyinline}}</td>
      <td>{{ domxref("TimeRanges") }}</td>
      <td>
        The time ranges that the user is able to seek to, if any<strong
          >.</strong
        >
      </td>
    </tr>
    <tr>
      <td><code>seeking </code>{{readonlyinline}}</td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        Indicates whether the media is in the process of seeking to a new
        position.
      </td>
    </tr>
    <tr>
      <td>
        <code>sinkId</code>
        {{readonlyinline}}{{experimental_inline}}
      </td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        The unique ID of the audio device delivering output, or an empty string
        if it is using the user agent default. This ID should be one of the
        <code>MediaDeviceInfo.deviceid</code> values returned from
        {{domxref("MediaDevices.enumeratedDevices()")}},
        <code>id-multimedia</code>, or <code>id-communications</code>.
      </td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>{{ domxref("DOMString") }}</td>
      <td>
        Reflects the <a href="/zh-CN/docs/Web/HTML/Element/video#src"><code>src</code></a> HTML
        attribute, containing the URL of a media resource to use. Gecko
        implements a similar functionality for streams:
        <code>mozSrcObject</code>.
      </td>
    </tr>
    <tr>
      <td><code>textTracks</code></td>
      <td>{{domxref("TextTrackList")}}</td>
      <td>
        Represents the list of {{domxref("TextTrack")}} objects
        contained in the element.
      </td>
    </tr>
    <tr>
      <td><code>videoTracks</code></td>
      <td>{{domxref("VideoTrackList")}}</td>
      <td>
        Represents the list of {{domxref("VideoTrack")}} objects
        contained in the element.
        <div class="note">
          <p>
            <strong>Note:</strong> Yet Gecko supports only single track
            playback, and the parsing of tracks' metadata is only available for
            media with Ogg container foramt.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>volume</code></td>
      <td><code>double</code></td>
      <td>表示音频的音量。值从 0.0（静音）到 1.0（最大音量）。</td>
    </tr>
  </tbody>
</table>

## Methods

_Inherits methods from its parent,_ _{{domxref("HTMLElement")}}._

<table>
  <thead>
    <tr>
      <th scope="col">Name &#x26; Arguments</th>
      <th scope="col">Return</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>canPlayType(in </code>{{ domxref("DOMString") }}<code>
          type)</code
        >
      </td>
      <td>
        <p>{{ domxref("DOMString") }}</p>
        <ul>
          <li>
            <code>probably</code>: if the specified type appears to be playable.
          </li>
          <li>
            <code>maybe</code>: if it's impossible to tell whether the type is
            playable without playing it.
          </li>
          <li>
            The <em>empty string</em>: if the specified type definitely cannot
            be played.
          </li>
        </ul>
      </td>
      <td>
        Determines whether the specified media type can be played back.
        <div class="note">
          <p>
            <strong>Note:</strong> Previously
            <code>canPlayType('video/webm')</code> returned
            <code>'probably'</code>. Starting with Gecko 28,
            it returns <code>'maybe'</code>.
            (<a href="https://bugzil.la/884275">Firefox bug 884275</a>)
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>fastSeek(double time)</code></td>
      <td><code>void</code></td>
      <td>Directly seek to the given time.</td>
    </tr>
    <tr>
      <td><code>load()</code></td>
      <td><code>void</code></td>
      <td>
        Reset the media element and restart selecting the media resource. Any
        pending events are discarded. How much media data is fetched is still
        affected by the <code>preload</code> attribute. This method can be
        useful for releasing resources after any <code>src</code> attribute and
        <code>source</code> element descendants have been removed. Otherwise, it
        is usually unnecessary to use this method, unless required to rescan
        <code>source</code> element children after dynamic changes.
      </td>
    </tr>
    <tr>
      <td><code>mozGetMetadata()</code>{{ non-standard_inline() }}</td>
      <td><code>Object</code></td>
      <td>
        The <code>mozGetMetadata</code> method returns a javascript object whose
        properties represent metadata from the playing media resource as {key:
        value} pairs. A separate copy of the data is returned each time the
        method is called.<br />This method must be called after the
        <code>loadedmetadata</code> event fires.
      </td>
    </tr>
    <tr>
      <td>
        <code>mozLoadFrom(HTMLMediaElement other)</code
        >{{ non-standard_inline() }} {{ deprecated_inline() }}
      </td>
      <td><code>void</code></td>
      <td>
        This method, available only in old Mozilla's implementation, loads data
        from another media element. This works similarly to
        <code>load()</code> except that instead of running the normal resource
        selection algorithm, the source is simply set to the
        <code>other</code> element's <code>currentSrc</code>.<br />This is
        optimized so this element gets access to all of the
        <code>other</code> element's cached and buffered data; in fact, the two
        elements share downloaded data so that data downloaded by either element
        is available to both.
      </td>
    </tr>
    <tr>
      <td><code>pause()</code></td>
      <td><code>void</code></td>
      <td>暂停播放。</td>
    </tr>
    <tr>
      <td>
        <a id="play" name="play"><code>play()</code></a>
      </td>
      <td><code>void</code></td>
      <td>开始播放。</td>
    </tr>
    <tr>
      <td>setMediaKeys {{experimental_inline}}</td>
      <td>{{jsxref("Promise")}}</td>
      <td>
        Sets the {{domxref("MediaKeys")}} keys to use when decrypting
        media during playback.
      </td>
    </tr>
    <tr>
      <td>setSinkId {{experimental_inline}}</td>
      <td>{{jsxref("Promise")}}</td>
      <td>
        Sets the ID of the audio device through which audio output should be
        rendered if the application is authorized to play out of a given device.
      </td>
    </tr>
  </tbody>
</table>

## Events

Audio and Video elements can fire quite a few different [events](/zh-CN/docs/Web/Events#media).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- References

  - {{ HTMLElement("video") }} and {{HTMLElement("audio")}} HTML elements.
  - {{ domxref("HTMLVideoElement") }} and {{ domxref("HTMLAudioElement") }} interfaces, derived from `HTMLMediaElement`.

- Articles

  - [Using HTML5 audio and video](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - [Media formats supported by the audio and video elements](/zh-CN/docs/Web/Media/Formats)
  - [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
