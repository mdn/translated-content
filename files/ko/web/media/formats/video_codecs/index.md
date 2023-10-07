---
title: 웹 비디오 코덱 가이드
slug: Web/Media/Formats/Video_codecs
---

압축되지 않은 비디오 데이터는 그 크기가 엄청나기 때문에, 저장하거나 네트워크를 통해 전송하기 위해서는 아주 작게 압축해야 합니다. 압축되지 않은 비디오를 저장하는 과정을 상상해 봅시다:

- HD(1920x1080) 풀 컬러(픽셀 당 4바이트) 비디오의 한 프레임은 8,294,400 입니다.
- 보통 초당 30프레임이므로 HD 비디오 1초는 248,832,000바이트 (\~249 MB)를 잡아 먹습니다.
- HD 1분은 1.39 GB가 필요합니다.
- 일반적인 30분짜리 비디오 컨퍼런스의 경우 47.1 GB가 필요하며, 2시간짜리 영화는 무려 *166 GB*입니다.

비압축된 비디오 데이터는 스토리지 공간이 많이 필요할 뿐만 아니라 네트워크로 전송할 경우에도 어마어마한 대역폭이 필요합니다. 오디오와 오버헤드를 제외하고도 초당 249 MB가 필요하죠. 여기서 비디오 코덱이 등장합니다. 오디오 코덱이 사운드 데이터를 처리하듯이 비디오 코덱도 비디오 데이터를 압축하고 적절한 포맷으로 인코딩하여, 이후에 디코딩하여 재생 또는 편집할 수 있도록 합니다.

대부분의 비디오 코덱은 손실 압축입니다. 디코딩해도 원본과 완전히 동일하지 않죠. 디테일한 부분이 사라질 수 있는데; 얼마나 사라지는지는 코덱와 설정에 달렸습니다만 압축율을 높일수록 디테일과 정확도는 감소합니다. 무손실 코덱도 있긴 합니다만, 보통 기록 보존 및 로컬 재생에만 염두에 두고 있는 경우가 많습니다.

이 문서는 웹에서 흔히 볼 수 있는 비디오 코덱을 소개하고 각각의 기능과 호환성, 사용성에 대해 설명하고 여러분에게 필요한 적절한 코덱을 찾는 법을 안내합니다.

## 일반 코덱

웹에서 널리 쓰이는 비디오 코덱은 아래와 같습니다. 각 코덱마다 해당 코덱을 지원하는 컨테이너(파일 타입)도 나열되어 있습니다. 각 코덱의 링크를 클릭하면 해당 코덱에 대해 세부정보, 기능, 호환성 등 필요한 내용이 추가된 하단 섹션으로 이동합니다.

| 코덱 이름 (축약어)             | 전체 코덱 이름                | 지원하는 컨테이너                                                                                                                                                        |
| ------------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [AV1](#av1)                    | AOMedia Video 1               | [MP4](/ko/docs/Web/Media/Formats/Containers#MP4), [WebM](/ko/docs/Web/Media/Formats/Containers#WebM)                                                                     |
| [AVC (H.264)](#avc_h.264)      | Advanced Video Coding         | [3GP](/ko/docs/Web/Media/Formats/Containers#3GP), [MP4](/ko/docs/Web/Media/Formats/Containers#MP4), [WebM](/ko/docs/Web/Media/Formats/Containers#WebM)                   |
| [H.263](#h.263)                | H.263 Video                   | [3GP](/ko/docs/Web/Media/Formats/Containers#3GP)                                                                                                                         |
| [HEVC (H.265)](#hevc_h.265)    | High Efficiency Video Coding  | [MP4](/ko/docs/Web/Media/Formats/Containers#MP4)                                                                                                                         |
| [MP4V-ES](#mp4v-es)            | MPEG-4 Video Elemental Stream | [3GP](/ko/docs/Web/Media/Formats/Containers#3GP), [MP4](/ko/docs/Web/Media/Formats/Containers#MP4)                                                                       |
| [MPEG-1](#mpeg-1_part_2_video) | MPEG-1 Part 2 Visual          | [MPEG](/ko/docs/Web/Media/Formats/Containers#MPEGMPEG-2), [QuickTime](/ko/docs/Web/Media/Formats/Containers#QuickTime)                                                   |
| [MPEG-2](#mpeg-2_part_2_video) | MPEG-2 Part 2 Visual          | [MP4](/ko/docs/Web/Media/Formats/Containers#MP4), [MPEG](/ko/docs/Web/Media/Formats/Containers#MPEGMPEG-2), [QuickTime](/ko/docs/Web/Media/Formats/Containers#QuickTime) |
| [Theora](#theora)              | Theora                        | [Ogg](/ko/docs/Web/Media/Formats/Containers#Ogg)                                                                                                                         |
| [VP8](#vp8)                    | Video Processor 8             | [3GP](/ko/docs/Web/Media/Formats/Containers#3GP), [Ogg](/ko/docs/Web/Media/Formats/Containers#Ogg), [WebM](/ko/docs/Web/Media/Formats/Containers#WebM)                   |
| [VP9](#vp9)                    | Video Processor 9             | [MP4](/ko/docs/Web/Media/Formats/Containers#MP4), [Ogg](/ko/docs/Web/Media/Formats/Containers#Ogg), [WebM](/ko/docs/Web/Media/Formats/Containers#WebM)                   |

## 인코딩 관여 요소

어떤 인코더를 사용하든지간에 인코딩된 비디오의 크기와 퀄리티를 결정하는 두 개의 기본적인 요소 그룹이 있습니다: 하나는 소스 비디오의 포맷와 콘텐츠이며 나머지는 인코딩 시 코덱의 특징 및 설정입니다.

요약하자면 이겁니다:인코딩 된 비디오가 원본에 가까울수록, 압축율은 적고 비디오 파일 크기는 커집니다. 그러므로 사이즈와 퀄리티는 항상 트레이드 오프가 있습니다. 특별한 경우에는 퀄리티 손실을 크게 감수하고서라도 사이즈를 많이 줄여야 할 필요가 있을 수도 있으며;반대로 고용량의 파일을 생성하더라도 퀄리티를 최대한 유지해야 하는 경우도 있습니다.

### 인코딩 된 비디오에 영향을 끼치는 소스 포맷

소스 비디오의 형식이 출력에 영향을 미치는 정도는 코덱과 작동 방식에 따라 다릅니다. 코덱이 미디어를 내장 픽셀 포맷으로 변환하거나 심플 픽셀 이외의 방식으로 이미지를 표현하는 경우에는 원본 포맷에 따른 차이는 거의 없습니다. 하지만 프레임 레이트나 해상도는 반드시 출력 미디어 크기에 영향을 미치게 되죠.

또한 모든 코덱은 각각 장단점이 있습니다. 어떤 코덱은 특정한 형태와 패턴에 약하거나 엣지 선명도가 약하거나, 암부의 디테일이 떨어지거나 등의 여러가지 문제가 있을 수 있죠. 모든 건 기저의 알고리즘과 수학 공식에 달렸습니다.

| 기능                    | 품질에 영향                                                                                                                                                                                                                                                                                                                                        | 크기에 영향                                                                                                                                                                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Color depth (bit depth) | 색 깊이가 높을수록 비디오의 색상 정확도가 높아집니다. Additionally, 이미지의 강렬한 부분 (빛이나 순수한 빨강 [`rgba(255, 0, 0, 1)`] 등 매우 원색적인 색상), 컴포넌트당 10bit (10-bit color) 이하의 색 깊이에서는 그라데이션 부분이 마치 계단처럼 색상이 분리되는 현상인 컬러 밴딩이 발생할 수 밖에 없습니다.                                       | 코덱에 따라 다르지만 색 깊이가 높을 수록 압축된 파일 사이즈가 커지게 됩니다. 압축 데이터의 내장 스토리지 포맷에 따라 결정됩니다.                                                                                                      |
| 프레임 레이트           | 이미지 상에 보여지는 움직임이 얼마나 부드러운지에 크게 영향을 끼칩니다. 프레임 레이트가 높을 수록 움직임이 더 부드럽고 현실에 가까워 집니다. 계속 높이다보면 압축의 의미가 없어지는 지점에 도달하게 되죠. 아래의 [Frame rate](#frame_rate) 절을 참조하세요.                                                                                        | 인코딩 도중 프레임 레이트를 감소시키지 않는 다면 높을 수록 압축된 결과물이 커집니다.                                                                                                                                                  |
| 움직임(Motion)          | 비디오 압축은 일반적으로 프레임을 비교하면서 수행합니다. 두 프레임이 어디가 다른지 찾아낸 후 이전 프레임에서 다음 프레임을 예측하기 위핸 최소한의 정보만을 기록하는 방식입니다. 연속된 프레임이 다른 것들과 다를 수록 차이점도 많아지고 the less effective the compression is at avoiding the introduction of artifacts into the compressed video. | 움직임이 복잡할 수록 프레임간의 차이점이 많아 지므로 인터프레임이 커지게 됩니다. 이를 비롯한 여러가지 이유로 인해 일반적으로 움직임이 많은 영상일수록 사이즈가 큽니다.                                                                |
| 잡음(Noise)             | 픽쳐 노이즈(필름 그레인 효과, 먼지 등 이미지의 불규칙한 점들)는 픽셀간 변화폭을 늘립니다. 증가된 변화폭은 압축을 어렵게 하고 동일한 압축 레벨일 때 디테일을 떨어뜨리는 원흉이 되죠.                                                                                                                                                                | 이미지에 -노이즈 같이- 변화폭이 큰 부분이 많을수록 압축 알고리즘이 비슷한 수준으로 이미지를 압축하기 어렵습니다. 노이즈로 인한 변화폭을 무시하도록 인코더를 세팅하지 않는 한 노이즈가 많을 수록 압축된 비디오 파일 크기도 커질겁니다. |
| 해상도(width, height)   | 압축하는 과정에 특이사항이 발생하지 않는 한 동일한 크기의 스크린에 더 높은 해상도의 비디오가 출력될 수록 원본에 가까운 영상을 볼 수 있습니다.                                                                                                                                                                                                      | 해상도가 높을수록 비디오 크기도 커집니다. 최종 사이즈에 결정적인 요소죠.                                                                                                                                                              |

위 요소들이 인코딩 된 비디오에 미치는 정도는 선택한 인코더와 설정 등 정확한 상황에 따라 굉장히 다양합니다. 인코딩 중에 코덱의 일반 옵션에 더해서 프레임 레이트를 줄이거나 노이즈 제거, 비디오 해상도를 줄이는 등 인코더 설정을 추가할 수 있습니다.

### 인코딩 결과물에 영향을 끼치는 코덱 설정

비디오 인코딩에 쓰이는 알고리즘은 보통 여러가지의 기술들로 구성되어 있습니다. 일반적으로 최종 결과물의 크기를 줄이기 위한 설정 옵션은 비디오 퀄리티 하락이나 특정 이슈를 발생시킵니다. 최종 결과물이 매우 커지지만 오리지널 소스를 완벽하게 재생하기 위해 무손실 인코딩을 택할 수도 있습니다.

또한 각 인코더는 결과물의 품질과 크기에 영향을 끼치는 다양한 바리에이션을 가지고 있기도 합니다.

| 기능        | 품질에 영향                                                                                                       | 크기에 영향                                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 무손실 압축 | 품질 손실 없음                                                                                                    | 손실 압축에 비해 무손실 압축은 전체 비디오 크기를 많이 줄일 수 없습니다; 결과물 파일은 일반적으로 사용하기엔 여전히 매우 거대합니다. |
| 손실 압축   | 특정 코덱과 압축을 어떻게 하느냐에 따라 퀄리티 저하에 영향을 끼치는 인자나 기타 요소가 어느 정도 발생하게 됩니다. | 원본 비디오와 많이 달라져도 된다면 높은 압축률을 달성하는 것은 어렵지 않습니다.                                                      |
| 품질 세팅   | 품질 설정을 높게 세팅할수록 인코딩 된 비디오도 원본에 가깝게 보일겁니다.                                          | 보통은 높은 품질로 설정할 수록 인코딩 된 비디오 파일도 커집니다;그 정도는 코덱에 따라 다르겠지만요.                                  |
| 비트레이트  | 품질을 높이면 보통 비트레이트도 높아집니다.                                                                       | 비트레이트가 높으면 결과물 파일도 커지죠.                                                                                            |

인코딩 시 설정 가능한 항목과 값은 코덱마다 다를 뿐만 아니라 사용하는 인코더 소프트웨어에 따라서도 다양합니다. 여러분이 사용하는 인코더 소프트웨어의 가이드 문서에 인코딩 시 영향을 끼치는 옵션에 대해 설명하고 있을겁니다.

## 압축 아티팩트

**아티팩트**는 는 손실 압축에서 발생할 수 있는 부작용으로 시각적인 데이터의 손실 또는 변경입니다. 비디오 출력 방식 때문에 아티팩트가 한 번 발생하면 생각보다 오래 남습니다. 비디오의 각 프레임은 현재 보여지는 프레임에서 변경된 부분만 적용하는 방식으로 표현됩니다. 이 말은 즉 에러나 아티팩트는 시간이 지날수록 복잡해지고 이미지상의 결함이나 이상한 점, 깨진 부분 등이 한동안 지속된다는 걸 의미하죠.

이 문제도 해결하고 또 비디오 데이터의 탐색 시간을 개선하기 위해 주기적으로 **키 프레임**(**인트라-프레임** 또는 **i-프레임**)을 비디오 파일에 삽입합니다. 키 프레임은 통짜 프레임으로 현재 보이는 이미지 손상이나 아티팩트를 수정하기 위해 존재합니다.

### 위신호(Aliasing)

위신호는 인코딩 된 데이터가 압축하기 전과 다르게 보이는 현상 전반에 대한 일반 용어입니다. 여러가지 종류의 위신호가 있으며;흔히 보이는 것들은 아래와 같습니다:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <h4 id="모아레_현상Moiré_patterns">모아레 현상(Moiré patterns)</h4>
        <p>
          <strong
            ><a href="https://en.wikipedia.org/wiki/Moir%C3%A9_pattern"
              >모아레 현상-Moiré pattern</a
            ></strong
          >는 소스 이미지의 패턴과 인코더의 동작 방식이 공간적으로 약간 정렬되어
          있지 않을 때 발생하는 대규모 공간 간섭 패턴입니다. 인코딩 시 발생한
          아티팩트를 디코딩 하면 소스 이미지에 이상한 회오리 무늬가 생깁니다.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"
          ><img
            alt=""
            src="moire-pattern.jpg"
            style="height: 250px; width: 205px"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="계단_현상">계단 현상</h4>
        <p>
          <strong>계단 현상</strong>은 공간적 아티팩트의 하나로 부드러워야 할
          대각선이나 곡선 경계면이 마치 계단처럼 들쭉날쭉하게 보이는 현상을
          의미합니다. "안티-앨리어싱"필터를 사용하면 줄일 수 있습니다.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img
            alt=""
            src="staircase-effect.jpg"
            style="height: 250px; width: 206px"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="마차_바퀴_현상">마차 바퀴 현상</h4>
        <p>
          <strong>마차 바퀴 현상</strong> (또는
          <strong
            ><a
              href="https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%8A%B8%EB%A1%9C%EB%B3%B4_%ED%9A%A8%EA%B3%BC"
              >스트로보 효과</a
            ></strong
          >)은 필름에서 흔히 볼 수 있는 시각적 효과로 프레임 레이트와 압축
          알고리즘에 의해 회전하는 바퀴가 느리거나 빠르게 혹은 아예 반대
          방향으로 보이는 것을 의미합니다. 이는 철도 노선의 침목이나 도로변의
          기둥 등 일정한 패턴으로 움직이는 것이라면 어디서든 볼 수 있습니다.
          이는 시간적 위신호 이슈로;압축 또는 인코딩 시 샘플링 레이트가 회선
          속도에 간섭하여 발생합니다.
        </p>
      </td>
      <td>
        <a
          href="stroboscopic-effect.gif"
          ><img
            alt=""
            src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### 컬러 엣징(Color edging)

**컬러 엣징**은 시각적 아티팩트 중 하나로 화면상의 색상을 가진 오브젝트들의 경계면에 잘못된 색상이 나타나는 현상입니다. 나타나는 색상은 프레임의 콘텐츠간에 아무 연관도 없습니다.

### 선명도 손실

비디오 인코딩 중 일부 데이터를 제거하면 필연적으로 디테일 손실이 발생합니다. 충분히 압축하고 나면 일부 또는 전체 이미지에 약간 불분명하거나 흐릿한 부분이 보일 수 있습니다.

선명도가 떨어지면 이미지 상의 글자를 읽기 어렵습니다. 특히나 작은 글씨들은 디테일에 민감한 콘텐츠로 작은 변화로도 매우 읽기 어려워집니다.

### 링잉 효과(Ringing)

손실 압축 알고리즘은 링잉 효과 [**ringing artifacts**](https://en.wikipedia.org/wiki/Ringing_artifacts)를 일으킬 수 있습니다. 링잉 효과는 압축 알고리즘에 의해 오브젝트의 경계면에 픽셀이 오염되는 현상을 의미합니다. 압축 알고리즘이 오브젝트와 배경의 경계면이 포함된 블럭을 사용했을 때 발생할 수 있습니다. 보통 압축율이 높을 때 주로 발생합니다.

[![Example of the ringing effect](ringing-effects.png)](ringing-effects.png)

위 별 모양의 경계 부분에 파랑 및 분홍 부분을 보세요 (계단 현상 등 다른 압축 아티팩트도 나타남). 저 부분이 링잉 효과입니다. 링잉은 어떤 면에서는 [mosquito noise](#mosquito_noise)와 비슷합니다, 다만 모기 효과는 일렁거리거나 움직이는데 반해 링잉 효과는 정지한 채로 변하지 않습니다.

링잉 효과 역시 이미지 상의 글자를 읽기 어렵게 하는 아티팩트입니다.

### 포스터라이징(Posterizing)

**포스터리제이션**은 압축된 결과물이 그라디언트 부분에서 색상 디테일을 잃는 현상을 의미합니다. 그라디언트 영역이 부드럽게 색상이 변하지 않고 원본과 비슷한 색상의 블록 형태로 얼룩이 묻은 듯한 이미지로 표현 됩니다.

[![](posterize-effect.jpg)](posterize-effect.jpg)

위 이미지상 흰머리 수리의 깃털 부분의 색상이 블록처럼 보이는 것을 보세요(배경의 흰색 올빼미도요). 포스터리제이션 효과로 인해 깃털의 디테일을 상당 부분 잃었습니다.

### 컨투어링(Contouring)

**컨투어링** 또는 **컬러 밴딩**은 포스터리제이션의 특별한 형태로 이미지에서 색상 블록이 줄무늬 형태로 나타나는 현상을 의미합니다. 이는 비디오 인코딩 시 양자화 설정이 제대로 이뤄지지 않은 경우 발생할 수 있습니다. 결과적으로 부드럽게 변해야 할 그라디언트 부분에 "층"이 생긴 것처럼 줄무늬가 보입니다.

[![Example of an image whose compression has introduced contouring](contouring-effect.jpg)](contouring-effect.jpg)

위 이미지를 보시면 하늘에서 지평선으로 부드럽게 변해야 하는데 파란색이 층층이 져 있는 것을 볼 수 있습니다. 이 것이 컨투어링 효과입니다.

### 모스키토 노이즈(Mosquito noise)

**모스키토 노이즈**는 시간적 아티팩트 중 하나로 배경과 물체의 경계면의 차이가 큰 부분에서 노이즈나 **edge busyness**가 흐릿하게 일렁거리는 현상을 의미합니다. 시각적으로는 [ringing](#ringing) 효과와 유사합니다.

![](mosquito-effect-sm.png)

위 이미지상 다리 여러군데의 주변 하늘에서 모스키토 노이즈를 볼 수 있습니다. 우측 상단에 모스키토 노이즈가 발생한 부분을 확대해 놓았습니다.

모스키토 노이즈는 MPEG 비디오에서 흔히 발견할 수 있지만 이산 코사인 변환(DCT)를 사용한 로직이라면 어디든지 발생할 수 있습니다;JPEG 정지 화상에서도요.

### 움직임 보상 블록 경계면 아티팩트

일반적인 비디오 압축은 두 프레임을 비교한 뒤 프레임간 차이점을 마지막 프레임까지 저장하는 방식으로 진행됩니다. 고정된 카메라에 촬영되는 물체들도 정지해 있다면 이 압축 방식은 매우 잘 동작하겠지만 프레임마다 움직임이 커지면 압축률을 높이기가 쉽지 않습니다.

[**움직임 보상**](https://ko.wikipedia.org/wiki/%EC%9B%80%EC%A7%81%EC%9E%84_%EB%B3%B4%EC%83%81)은 물체가 각각의 방향으로 얼마만큼 많은 픽셀이 이동했는지 움직임(카메라 자체의 이동 또는 프레임 상의 물체의 이동)을 추적하는 기술입니다. 그리고 단순 움직임 만으로는 설명할 수 없는 픽셀의 추가 정보와 함께 움직임을 저장합니다. 요약하자면 인코더가 움직이는 물체를 찾아낸 후 원본과 동일해 보이지만 새로운 위치로 이동한 인터널 프레임을 생성하는 방식입니다. 이론적으로는 새로운 프레임이 나타난 것과 거의 동일합니다. 새 프레임에 남아있는 다른 차이점이 발견된다면 물체의 움직임과 픽셀 차이점을 저장하여 작업을 마무리 합니다. 이렇게 움직임과 픽셀 차이점이 기록된 물체를 **residual frame**이라 부릅니다.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">원본 프레임</th>
      <th scope="col" style="width: 216px">인터-프레임 차이점</th>
      <th scope="col" style="width: 216px">움직임 보상 이후 차이점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          alt="Original frame of video"
          src="motion-comp-orig.jpg"
          style="height: 102px; width: 182px"
        />
      </td>
      <td>
        <img
          alt=""
          src="motion-comp-diff.jpg"
          style="height: 102px; width: 182px"
        />
      </td>
      <td>
        <img
          alt="Differences between the frames after shifting two pixels right"
          src="motion-comp-compensated.jpg"
          style="height: 102px; width: 182px"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">시청자에게 보이는 최초 전체 프레임</td>
      <td style="vertical-align: top">
        이건 첫번째 프레임과 두번째 프레임간의 차이점만 나타낸 화면입니다.
        나머지는 모두 검정이죠. 가까이서 보면 이 움직임들은 단지 카메라가
        수평으로 이동했기 때문에 발생한 것을 알 수 있습니다. 움직임 보상을
        써먹기에 아주 좋은 후보죠.
      </td>
      <td style="vertical-align: top">
        차이점을 가지는 픽셀 수를 최소화 하기 위해 첫번째 프레임에서 카메라가
        오른쪽으로 2픽셀 이동하였다고 가정한 뒤 픽셀 차이점을 계산합니다. 이는
        카메라의 움직임을 추적하여 두 프레임간 겹치는 부분이 더 많아지게 합니다.
      </td>
    </tr>
    <tr>
      <th
        colspan="3"
        style="
          font: italic 0.9em Arial, x-locale-body, sans-serif;
          vertical-align: middle;
        "
      >
        Images from
        <a
          href="https://en.wikipedia.org/wiki/Motion_compensation#Illustrated_example"
          >Wikipedia</a
        >
      </th>
    </tr>
  </tbody>
</table>

움직임 보상에는 두 가지 형태가 있습니다: **전역 움직임 보상** 과 **블록 움직임 보상**입니다. 전역 움직임 보상은 달리, 트래킹, 선회, 기울이기 및 회전 등의 카메라 변화를 감지합니다. 블록 움직임 보상은 추적 대상이 될만한 움직임의 작은 부분들을 찾아 처리합니다. 블록들은 보통 고정된 크기를 가지고 격자 형태로 배열되어 있지만 다양한 크기의 블록 및 블록이 겹치는 경우도 처리할 수 있도록 여러 형태의 움직임 보상을 지원합니다.

하지만 움직임 보상에서도 아티팩트가 발생할 수 있습니다. 링잉 효과 등의 현상이 발생할 만큼 선명한 경계면에서 주로 발생합니다. 이는 residual frame을 코딩하는 도중 수학 계산의 결과물로 인해 발생하는 것으로 다음 키프레임에 의해 수정되기 전에 쉽게 발견할 수 있습니다.

### 프레임 크기 감소

특정 상황에서는 비디오 면적을 감소시키는 것이 비디오 파일 최종 사이즈를 줄이는데 도움이 되기도 합니다. 재생 도중 당장의 크기나 부드러움이 줄어드는 건 안 좋은 게 사실이지만 세심하게 조절하면 최종 결과물은 더 좋아질 수 있습니다. 1080p 비디오를 인코딩 전 720p 비디오로 축소한다면 화질을 더 높게 유지한 채로 크기를 훨씬 줄일 수 있습니다; 재생 할 때 스케일업 하더라도 필요한 파일 크기에 맞추어 품질을 조정한 채 전체 크기로 인코딩한 경우보다 화질이 좋습니다.

### 프레임 레이트 감소

비슷하게 전체 비디오에서 프레임을 제거하고 프레임 레이트를 감소시킬 수도 있습니다. 두 가지 장점이 있는데: 전체 비디오를 작게 만들고 움직임 보상 처리가 더 쉬워집니다. 예를 들어 2 픽셀이 차이나는 두 인터 프레임 간의 움직임 차이점을 계산하는 대신에, 프레임을 스킵하여 두 프레임 간 4 픽셀 차이점을 계산하도록 할 수 있습니다. 이러면 전체 카메라 이동을 더 적은 residual frame으로 표현할 수 있습니다.

사람 눈의 움직이는 것처럼 인식되는 최소한의 프레임 레이트는 약 12입니다. 그보다 적으면 비디오가 아니라 연속된 정지 화상으로 보입니다. 영화 필름은 보통 초당 24 프레임이며 표준 화질 TV(SDTV)는 대략 30 fps(약간 적지만 비슷합니다, 29.97), 고화질 TV(HDTV)는 24-60fps입니다. 24fps이상이면 일반적으로 충분히 부드러워 보입니다;여러분의 필요에 따라 다르지만 30/60fps가 이상적인 목표치죠.

결론적으로 어떤걸 희생할 지 정하는 것은 여러분의 디자인 팀에 달렸습니다.

## 코덱 세부사항

### AV1

**AOMedia Video 1** (**AV1**) 코덱은 [Alliance for Open Media](https://aomedia.org/) 기관이 인터넷 비디오를 위해 개발한 오픈 포맷입니다. [VP9](#vp9), [H.265/HEVC](#hevc_h.265) 보다 압축율이 높으며, [AVC](#avc_h.264)보다 50% 이상 압축율이 높습니다. AV1은 완전한 로열티 프리이며 {{HTMLElement("video")}} 엘리먼트와 [WebRTC](/ko/docs/Web/API/WebRTC_API)에서 사용하기 위해 설계하였습니다.

AV1은 현재 세 프로파일을 제공하며:**main**, **high**, **professional** 다양한 색 깊이와 크로마 서브샘플링을 지원합니다. 또한 **레벨** 역시 정의하여 각 레벨은 비디오 속성의 범위를 제한하고 있습니다. 비디오 속성에는 프레임 면적, 픽셀간 이미지 영역, 출력 및 디코딩 속도, 평균/최대 비트 레이트, 인코딩/디코딩 시 사용하는 타일 개수와 항목 등이 있습니다.

예를들어 AV1 level 2.0의 최대 프레임 크기는 가로 2048 세로 1152 픽셀이지만 프레임 당 최대 픽셀 개수는 147,456(<= 2048x1152 = 2,359,296)이므로 실제 2048x1152 크기의 프레임을 사용할 수는 없습니다. 하지만 인지해야 할 점은 적어도 파이어폭스와 크롬의 소프트웨어 디코더는 현 시점에서 사실상 레벨은 무시하고 주어진 설정에 맞추어 비디오를 디코딩하는데 최선을 다합니다. 하지만 향후 호한성을 위해 여러분은 선택한 레벨에 맞추어 유지해야 합니다.

현시점의 AV1의 주요 문제점은 새로운 포맷이며 브라우저에 연동이 아직 진행중에 있다는 것입니다. 또한 인/디코더도 최적화해야 하며 하드웨어 인/디코더는 제품화되지 않아 아직 개발중입니다. 이러한 문제점들이 소프트웨어적으로 해결되기 전까지는 비디오 인코딩을 AV1 포맷으로 전환하는데 시간이 소요될 것입니다.

위와 같은 이유로 당분간 최우선 비디오 코덱으로 AV1를 사용하기에는 이르지만 미래에는 반드시 선택을 고려해야 합니다.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>
        비디오 레벨에 따라 다름;이론적으로 level 6.3에서 최대 800Mbps<sup
          ><a href="#av1-foot-2">[2]</a></sup
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 레이트</th>
      <td>
        레벨에 따라 다름;예를 들어 level 2.0은 최대 30fps, level 6.3은 최대
        120fps
      </td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT 기반 알고리즘</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>8 x 8 픽셀 에서 65,535 x 65535 픽셀 사이 값</td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">프로필</th>
              <th scope="col">색 깊이</th>
              <th scope="col">크로마 서브샘플링</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Main</th>
              <td>8 or 10</td>
              <td>4:0:0 (그레이스케일) or 4:2:0</td>
            </tr>
            <tr>
              <th scope="row">High</th>
              <td>8 or 10</td>
              <td>4:0:0 (그레이스케일), 4:2:0, or 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Professional</th>
              <td>8, 10, or 12</td>
              <td>4:0:0 (그레이스케일), 4:2:0, 4:2:2, or 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">가변 프레임 레이트 (VFR) 지원</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">브라우저 호환성</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AV1 지원</th>
              <td>70</td>
              <td>75</td>
              <td>67</td>
              <td>No</td>
              <td>57</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컨테이너</th>
      <td>
        ISOBMFF<sup><a href="#av1-foot-1">[1]</a></sup
        >, MPEG-TS,
        <a href="/ko/docs/Web/Media/Formats/Containers#MP4">MP4</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#WebM">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환성
      </th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">유지 보수 기관</th>
      <td><a href="https://aomedia.org/">Alliance for Open Media</a></td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>
        <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf"
          >https://aomediacodec.github.io/av1-spec/av1-spec.pdf</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>로열티 프리, 공개 포맷</td>
    </tr>
  </tbody>
</table>

\[1] [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format)

\[2] See the AV1 specification's [tables of levels](https://aomediacodec.github.io/av1-spec/#levels), which describe the maximum resolutions and rates at each level.

### AVC (H.264)

MPEG-4 스펙 집합 중 **Advanced Video Coding** (**AVC**) 표준은 ITU H.264 스펙 및 MPEG-4 Part 10 스펙과 동일한 것입니다. TV 방송, 영상회의, 블루레이 디스크 미디어를 포함한 모든 종류의 미디어에 사용되는 움직임 보상에 기반한 코덱이죠.

AVC는 높은 호환성을 지원하는 여러 프로파일 덕분에 매우 유연합니다; 예를들어 Constrained Baseline Profile은 영상회의와 모바일 환경을 고려하였고 MainProfile(몇몇 지역에서 SDTV로 사용)나 High Profile(블루레이 디스크에서 사용)보다 대역폭을 적게 사용합니다. 대부분의 프로파일은 8-bit 컬러 컴포넌트와 4:2:0 크로마 서브샘플링을 사용합니다; High 10 Profile은 10-bit 컬러를 지원하며 High 10 Advanced form은 4:2:2, 4:4:4 크로마 서브샘플링을 지원합니다.

AVC에 동일한 장면의 여러 시점을 지원하는 기능도 있습니다.(Multiview Video Coding), 이는 양안 영상 등을 가능하게끔 합니다.

AVC는 유료 포맷이지만 무수한 특허들이 개입한 여러 단체에 소유권이 나뉘어져있습니다. 상용 목적일때는 AVC 미디어 라이선스가 필요하지만 인터넷 환경에서 최종 사용자에게 비디오가 무료로 스트리밍하는 경우에는 MPEG LA 특허권자가 라이선스를 요구하지 않습니다.

웹이 아닌 환경에서 WebRTC를 구현한 브라우저(JavaScript API가 없는 제품이라도)는 WebRTC 콜을 위해 AVC를 지원해야합니다. 웹 브라우저는 꼭 그럴필요는 없지만 몇몇은 지원하고 있습니다.

많은 플랫폼이 웹브라우저의 HTML 콘텐츠 형태로 AVC의 하드웨어 인코딩/디코딩을 지원하고 있습니다. 하지만 AVC를 프로젝트에서 사용하기 전에 [라이선스 요구사항](https://www.mpegla.com/programs/avc-h-264/)을 꼭 읽어보세요!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>레벨에 따라 다름</td>
    </tr>
    <tr>
      <th scope="row">지원 프레임레이트</th>
      <td>레벨에 따라 다름; 300 fps까지 가능</td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT 기반 알고리즘</a
        >, 이미지안에 무손실 매크로 블록 생성 가능
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>최대 8,192 x 4,320 픽셀</td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>
        <p>일반적이고 유효한 프로필:</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">프로필</th>
              <th scope="col">색 깊이</th>
              <th scope="col">크로마 서브샘플링</th>
            </tr>
            <tr>
              <td>Constrained Baseline (CBP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Baseline (BP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Extended (XP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main (MP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>High (HiP)</td>
              <td>8</td>
              <td>4:0:0 (그레이스케일) and 4:2:0</td>
            </tr>
            <tr>
              <td>Progressive High (ProHiP)</td>
              <td>8</td>
              <td>4:0:0 (그레이스케일) and 4:2:0</td>
            </tr>
            <tr>
              <td>High 10 (Hi10P)</td>
              <td>8 to 10</td>
              <td>4:0:0 (그레이스케일) and 4:2:0</td>
            </tr>
            <tr>
              <td>High 4:2:2 (Hi422P)</td>
              <td>8 to 10</td>
              <td>4:0:0 (그레이스케일), 4:2:0, and 4:2:2</td>
            </tr>
            <tr>
              <td>High 4:4:4 Predictive</td>
              <td>8 to 14</td>
              <td>4:0:0 (그레이스케일), 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>
        예;
        <a href="https://en.wikipedia.org/wiki/Hybrid_log%E2%80%93gamma"
          >Hybrid Log-Gamma</a
        >
        또는 Advanced HDR/SL-HDR; 모두 ATSC의 파트
      </td>
    </tr>
    <tr>
      <th scope="row">가변 프레임 레이트 (VFR) 지원</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">브라우저 호환성</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AVC / H.264 지원</th>
              <td>4</td>
              <td>12</td>
              <td>
                35<sup><a href="#avc-foot-1">[1]</a></sup>
              </td>
              <td>9</td>
              <td>25</td>
              <td>3.2</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컨테이너</th>
      <td>
        <a href="/ko/docs/Web/Media/Formats/Containers#3GP">3GP</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#MP4">MP4</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#WebM">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환
      </th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">유지 보수 기관</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>
        <a
          href="https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding"
          >https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding</a
        ><br /><a href="https://www.itu.int/rec/T-REC-H.264"
          >https://www.itu.int/rec/T-REC-H.264</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>
        상용 특허 다수. 상용 사용 시
        <a href="https://www.mpegla.com/programs/avc-h-264/">라이선스 필요</a>.
        여러 특허 풀에 영향 가능
      </td>
    </tr>
  </tbody>
</table>

\[1] Firefox support for AVC is dependent upon the operating system's built-in or preinstalled codecs for AVC and its container in order to avoid patent concerns.

### H.263

ITU의 H.263 코덱은 저대역폭 환경에서 쓰기 위해 설계하였습니다. 특히 PSTN (Public Switched Telephone Networks), {{Glossary("RTSP")}}, SIP (IP-based videoconferencing) 시스템에서의 영상 회의에 초점을 맞추었습니다. 저대역폭 네트워크 환경에 최적화되었음에도 CPU에 영향이 크며 저사양 컴퓨터에서 원할하게 동작하지 않습니다. 데이터 포맷은 MPEG-4 Part2와 유사합니다.

H.263은 웹에서 널리 쓰인 적이 없습니다. H.263의 변형 포맷이 Flash 비디오나 Sorenson 코덱 같은 상용 소프트웨어에서 사용된 적은 있습니다. 하지만 주요 브라우저 중 H.263를 기본으로 지원하는 제품은 없습니다. 특정 플러그인이 H.263을 지원하고는 있습니다.

대부분의 코덱과 다르게 H.263은 인코딩 된 비디오의 프레임별 최대 **비트레이트**(**BPPmaxKb**)의 기본값을 정의하고 있습니다. 인코딩시에 BPPmaxKb값을 지정하면 각 프레임은 해당 수치를 넘어설 수 없습니다. 최종 프레임은 이 값과 프레임 레이트, 압축, 선택한 해상도와 블록 포맷에 따라 결정됩니다.

H.263은 H.264로 대체되었으며 가능한한 이전의 미디어 포맷은 사용하지 않아야 합니다. H.263이 최선일 정도로 오래된 장치를 지원해야 하는 프로젝트일 경우에만 H.263을 지원할테죠.

H.263는 Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm 등 수 많은 기관들이 소유하고 있는 [특허](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242)에 기반한 상용 포맷입니다. H.263을 사용하려면 필요한 라이선스를 반드시 취득해야합니다.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>무제한, 단 보통 64kbps 미만</td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 레이트</th>
      <td>자유</td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT 기반 알고리즘</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>
        최대 1408 x 1152 픽셀<sup><a href="#h263-foot-2">[2]</a></sup>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>
        YCbCr; 각 픽쳐 포맷 (sub-QCIF, QCIF, CIF, 4CIF, or 16CIF)은 프레임
        크기를 픽셀 및 휘도와 색차 샘플의 라인수로 정의하고 있음
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">가변 비트레이트 (VFR) 지원</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">브라우저 호환성</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">H.263 지원</th>
              <td>No</td>
              <td>No</td>
              <td>
                No<sup><a href="#h263-foot-1">[1]</a></sup>
              </td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">컨테이너 지원</th>
      <td>
        <a href="/ko/docs/Web/Media/Formats/Containers#3GP">3GP</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#MP4">MP4</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#QuickTime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환
      </th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">유지 보수 기관</th>
      <td><a href="https://www.itu.net/">ITU</a></td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.263/"
          >https://www.itu.int/rec/T-REC-H.263/</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>상용;적절한 라이선스가 필요함. 특허 풀이 여러 곳일 수 있음.</td>
    </tr>
  </tbody>
</table>

\[1] While Firefox does not generally support H.263, the OpenMax platform implementation (used for the Boot to Gecko project upon which Firefox OS was based) did support H.263 in 3GP files.

\[2] Version 1 of H.263 specifies a set of picture sizes which are supported. Later versions may support additional resolutions.

### HEVC (H.265)

**[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) 코덱은 ITU의 **H.265** 및 MPEG-H Part 2 (MPEG-4 후속 작업으로 개발 진행 중). HEVC는 현대 프로세서의 특정점을 십분 활용하여 소프트웨어가 (8K 비디오를 포함한) 초고해상도 비디오 인코딩/디코딩을 효율적으로 할 수 있도록 설계하였습니다. 이론적으로 HEVC는 [AVC](#avc_h.264)와 유사한 품질을 유지하면서 절반 크기로 압축할 수 있습니다.

예를들어 각 코딩 트리 유닛(CTU, 이전 세대 코덱의 매크로블록과 유사) 샘플의 휘도 값 트리와 색차 값 트리, 필요한 문법 요소로 구성되어 있습니다. 이는 멀티 코어 환경을 쉽게 활용할 수 있게 합니다.

메인 프로파일이 컴포넌트당 8비트 컬러와 4:2:0 크로마 서브샘플링을 지원하는 점은 흥미로운 부분입니다. 또한 4:4:4 비디오는 특별 취급합니다. 휘도 샘플(이미지 픽셀을 그레이스케일로 표현)과 Cb Cr 샘플(회색을 색상으로 어떻게 변경할지 표시)을 가지는 대신, 세 채널은 3개의 모노크롬 이미지로 취급하며 렌더링시에 풀컬러 이미지를 만들어 내도록 결합합니다.

HEVC는 상용 포맷이며 여러 특허로 보호받고 있습니다. [MPEG LA](https://www.mpegla.com/programs/hevc/)하에 라이선스가 관리되고 있으며; 컨텐츠 제작자나 제공자가 아닌 개발자에 청구됩니다. 여러분의 앱/웹사이트에서 HEVC 사용 여부를 결정하기 전에 최신 라이선스와 요구 사항을 점검하는 걸 잊지마세요!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>최대 800,000 Kbps</td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 레이트</th>
      <td>레벨마다 다름; 최대 300 FPS 가능</td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT 기반 알고리즘</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>128 x 96 에서 8,192 x 4,320 픽셀; 프로파일과 레벨마다 다름</td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>
        <p>
          아래 표는 주요 프로파일에 한해서입니다. 여기에 포함하지 않는
          프로파일도 있습니다.
        </p>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">프로파일</th>
              <th scope="col">색 깊이</th>
              <th scope="col">크로마 서브샘플링</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 10</td>
              <td>8 to 10</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 12</td>
              <td>8 to 12</td>
              <td>4:0:0 and 4:2:0</td>
            </tr>
            <tr>
              <td>Main 4:2:2 10</td>
              <td>8 to 10</td>
              <td>4:0:0, 4:2:0, and 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:2:2 12</td>
              <td>8 to 12</td>
              <td>4:0:0, 4:2:0, and 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:4:4</td>
              <td>8</td>
              <td>4:0:0, 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 10</td>
              <td>8 to 10</td>
              <td>4:0:0, 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 12</td>
              <td>8 to 12</td>
              <td>4:0:0, 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 16 Intra</td>
              <td>8 to 16</td>
              <td>4:0:0, 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">가변 프레임 레이트 (VFR) 지원</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">브라우저 호환성</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">HEVC / H.265 지원</th>
              <td>107</td>
              <td>18</td>
              <td>No</td>
              <td>11</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome은 macOS Big Sur 11+ 및 Android 5.0+의 모든 장치에 대해 Windows 8+, Linux 및 ChromeOS에서 하드웨어를 지원하는 장치에 대해 HEVC를 지원합니다.</p>
        <p>Edge(Chromium)는 <a href="https://apps.microsoft.com/store/detail/hevc-video-extension/9NMZLZ57R3T7">Microsoft Store의 HEVC 비디오 확장 프로그램</a>이 설치된 경우 Windows 10 1709+에서 하드웨어 지원 장치에 대해 HEVC를 지원하며 다른 플랫폼의 Chrome과 동일한 지원 상태를 갖습니다. Edge(레거시)는 하드웨어 디코더가 있는 장치에 대해서만 HEVC를 지원합니다.
        </p>
        <p>Mozilla는 HEVC가 특허에 의해 방해받는 동안 지원하지 않을 것입니다.</p>
        <p>Internet Explorer는 하드웨어 디코더가 있는 장치에 대해서만 HEVC를 지원합니다.</p>
        <p>Opera 및 기타 Chromium 기반 브라우저는 Chrome과 동일한 방식으로 지원됩니다.</p>
        <p>Safari는 macOS High Sierra 및 이후 버전의 모든 기기에서 HEVC를 지원합니다.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컨테이너</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
            >ISOBMFF</a
          >、MPEG-TS、<a href="/ko/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>、<a href="/ko/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환
      </th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">유지/보수 기관</th>
      <td>
        <a href="https://www.itu.net/">ITU</a> /
        <a href="https://mpeg.chiariglione.org/">MPEG</a>
      </td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>
        <a href="http://www.itu.int/rec/T-REC-H.265"
          >http://www.itu.int/rec/T-REC-H.265</a
        ><br /><a href="https://www.iso.org/standard/69668.html"
          >https://www.iso.org/standard/69668.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>
        상용;<a href="https://www.mpegla.com/programs/hevc/"
          >라이선스 요구사항</a
        >에서 컴플라이언스 확인 다수의 특허 풀이 적용될 수 있음에 유의
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

**MPEG-4 Video Elemental Stream** (**MP4V-ES**) 포맷은 MPEG-4 Part 2 시각 표준 중 하나입니다. 일반적으로 MPEG-4 part 2 비디오는 더 이상 사용하지 않는데 다른 코덱에 비해 특장점이 없어 모바일에서도 쓰임새가 없습니다. MP4V 는 MPEG-4 컨테이너의 H.263 인코딩과 본질적으로 동일합니다.

원래 목적은 {{Glossary("RTP")}} 세션에서 MPEG-4 오디오 및 비디오 스트림을 사용하기 위해서였습니다. 하지만 [3GP](/ko/docs/Web/Media/Formats/Containers#3GP)를 통한 모바일 통신에서도 쓰이고 있습니다.

지원하는 주요 브라우저가 없으며 사실상 폐기된 포맷이라 왠만하면 사용할 일이 없을겁니다. 이 컨테이너 파일의 확장자는`.mp4v`지만 `.mp4`로 잘못 표기된 경우도 있습니다.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>5 Kbps 에서 1 Gbps 이상</td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 레이트</th>
      <td>명시적 제한 없음; 데이터 전송율에 의해 제한</td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT 기반 알고리즘</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>최대 4,096 x 4,096 픽셀</td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>
        YCrCb 크로마 서브샘플링(4:2:0, 4:2:2, and 4:4:4); 컴포넌트당 12bits 색
        깊이
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">가변 프레임 레이트 (VFR) 지원</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">브라우저 호환성</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MP4V-ES 지원</th>
              <td>
                No<sup><a href="#mp4ves-foot-2">[2]</a></sup>
              </td>
              <td>No</td>
              <td>
                Yes<sup><a href="#mp4ves-foot-1">[1]</a></sup>
              </td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컨테이너</th>
      <td>
        <a href="/ko/docs/Web/Media/Formats/Containers#3GP">3GP</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#MP4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환
      </th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining 유지/보수 기관</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>{{RFC(6416)}}</td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>
        상용; <a href="https://www.mpegla.com/">MPEG LA</a> and/or
        <a href="https://about.att.com/innovation/ip/patents/mpeg-4"
          >AT&#x26;T</a
        >에서 필수
        <a href="https://www.mpegla.com/programs/mpeg-4-visual/"
          >라이선스 취득 필</a
        >요
      </td>
    </tr>
  </tbody>
</table>

\[1] Firefox supports MP4V-ES in [3GP](/ko/docs/Web/Media/Formats/Containers#3GP) containers only.

\[2] Chrome does not support MP4V-ES; however, Chrome OS does.

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video**는 1990년대 초에 베일을 벗었습니다. 이후 MPEG 비디오 표준과는 다르게 MPEG-1은 {{Glossary("ITU", "ITU's")}}의 개입 없이 순수히 MPEG가 만들었습니다.

모든 MPEG-2 디코더는 MPEG-1 비디오를 재생할 수 있기 때문에 다양한 소프트웨어와 하드웨어 장치에서 호환 가능합니다. MPEG-1 비디오 특허는 모두 만료되었으며, 라이선스에 대한 걱정에서 자유롭습니다. 하지만 소수의 브라우저만이 플러그인 없이 MPEG-1을 지원하며 플러그인은 deprecated된 경우가 많으므로 일반적으로는 더 이상 사용할 수 없습니다. 때문에 웹사이트/어플리케이션에서 MPEG-1는 좋은 선택이 아닙니다.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>최대 1.5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 레이트</th>
      <td>
        23.976 FPS, 24 FPS, 25 FPS, 29.97 FPS, 30 FPS, 50 FPS, 59.94 FPS, 60 FPS
      </td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT 기반 알고리즘</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>최대 4,095 x 4,095 픽셀</td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>Y'CbCr 4:2:0 크로마 서브샘플링 with up to 12 bits per component</td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">가변 프레임 레이트 (VFR) 지원</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">브라우저 호환</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-1 지원</th>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컨테이너</th>
      <td>MPEG</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환
      </th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">유지/보수 기관</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>
        <a href="https://www.iso.org/standard/22411.html"
          >https://www.iso.org/standard/22411.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>
        Proprietary; however, all patents have expired, so MPEG-1 may be used
        freely
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** {{Glossary("ITU")}}가 설계한 H.262를 참조하여 MPEG-2 스펙에서 정의한 비디오 포맷이며입니다. MPEg-1 비디오와 매우 유사하며 사실 MPEG-2 플레이어는 높은 비트레이트 및 특수 인코딩 옵션 지원을 위한 확장 스펙이 아닌 한 특별한 작업 없이 MPEG-1 비디오를 재생할 수 있습니다.

MPEG-2의 목적은 표준 TV로 압축하는 것이므로 인터레이스 비디오도 지원합니다. 표준 비디오 결과물의 압축 비율과 품질은 DVD 비디오 미디어의 요구사항도 충족하여 메인 비디오 코덱으로 MPEG-2가 선정되기에 충분하였습니다.

MPEG-2는 서로 다른 스펙을 가진 여러 프로파일이 있습니다. 각 프로파일은 4개의 레벨을 가지고 있으며 프레임 레이트, 해상도, 비트레이트등의 비디오 속성 값을 증가시킬 수 있습니다. 대부분의 프로파일은 Y'CbCr 4:2:0 크로마 서브샘플링을 쓰지만 더 상위의 프로파일은 4:2:2를 지원한다든가 말입니다. 추가로 대형 프레임 크기 및 비트레이트 지원을 위한 4개의 레벨이 있습니다. 예를 들어 북미 지역의 [ATSC standards](https://en.wikipedia.org/wiki/ATSC_standards) TV 스펙은 Main Profile at high Level을 통해 1920 x 1080 (30 FPS) 및 1280 x 720 (60 FPS)의 고화질을 최대 80 Mbps 비트레이트로 지원합니다.

그러나 소수의 브라우저만 MPEG-2를 네이티브로 지원하며 플러그인은 대부분 deprecated 되어 더 이상 사용 가능하지 않습니다. 때문에 웹 사이트나 웹앱에서 MPEG-2는 좋은 선택이 아닙니다.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>최대 100 Mbps; 레벨과 프로파일에 따라 다름</td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 레이트</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">축약어</th>
              <th scope="col">레벨 이름</th>
              <th scope="col">지원 프레임 레이트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>23.9, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>23.976, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT 기반 알고리즘</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">축약어</th>
              <th scope="col">레벨 이름</th>
              <th scope="col">최대 프레임 크기</th>
            </tr>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>352 x 288 pixels</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>720 x 576 pixels</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>1440 x 1152 pixels</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>1920 x 1152 pixels</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>
        대다수 프로파일에서 Y'CbCr 4:2:0 크로마 서브샘플링; "High", "4:2:2"
        프로파일에서 4:2:2 크로마 서브샘플링 지원.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">가변 프레임 레이트(VFR) 지원</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">브라우저 호환성</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-2 지원</th>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컨테이너</th>
      <td>
        <a href="/ko/docs/Web/Media/Formats/Containers#MPEGMPEG-2">MPEG</a>,
        MPEG-TS (MPEG Transport Stream),
        <a href="/ko/docs/Web/Media/Formats/Containers#MP4">MP4</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#QuickTime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환
      </th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">유지/보수 기관</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.262"
          >https://www.itu.int/rec/T-REC-H.262</a
        ><br /><a href="https://www.iso.org/standard/61152.html"
          >https://www.iso.org/standard/61152.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>
        상용; 2019년 4월 1일자로 말레이지아와 필리핀을 제외한 모든 지역에서 모든
        특허 만료됨, 두 국가 외에서는 자유롭게 사용 가능.
        <a href="https://www.mpegla.com/programs/mpeg-2/">MPEG LA</a>에 의해
        특허 관리
      </td>
    </tr>
  </tbody>
</table>

### Theora

[Xiph.org](https://xiph.org/)가 [**Theora**](https://en.wikipedia.org/wiki/Theora)는 로열티와 라이선스 없이 사용 가능한 오픈소스 자유 비디오 코덱입니다. Theora의 품질과 압축율은 MPEG-4 Part 2 Visual과 AVC에 견줄만하며, 비디오 인코딩 시 반드시 최고를 고수해야 하는 경우가 아니라면 매우 좋은 선택이 될 수 있습니다. 하지만 라이선스-프리로 특허 문제가 없으며 상대적으로 저사양 CPU에서도 충분히 돌아가는 스펙 덕분에 최근 많은 소프트웨어와 웹프로젝트에서 선택하고 있습니다. 현재로써는 Theroa를 위한 하드웨어 디코더가 없기 때문에 저사양 CPU에서도 원할하다는 점은 아주 중요합니다.

Theora는 원래 On2 Technologies의 VC3 코덱을 베이스로 하고 있습니다. VC3 코덱과 사양은 Xiph.org 관리 하에 LGPL 라이선스로 등재되어 있으며 이후 Theora 표준으로 인입하였습니다.

Theora의 단점 중 하나는 오직 8 bit 컬러 모드만을 지원하여 컬러 밴딩을 피하기 위해 10 이상의 컬러 모드를 선택하는 옵션이 없다는 겁니다. 따지자면 현 시점에서 8 bit 컬러가 대부분이기 때문에 큰 문제는 되지 않습니다. 단지 불편할 뿐이죠. 또 Theora는 Ogg 컨테이너에서만 사용할 수 있습니다. 가장 큰 문제는 Safari에서 사용할 수 없다는 것입니다. macOs 뿐만 아니라 수억대의 iPhone과 iPad에서도 사용할 수 없다는 걸 의미합니다.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>최대 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 레이트</th>
      <td>
        임의의 0 이상 값 지원. 유리수 프레임 레이트를 지원하기 위해 32-bit
        분자와 분모로 구성되어 있음
      </td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-기반 알고리즘</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>
        최대 1,048,560 x 1,048,560 픽셀 이하 어떠한 가로, 세로 조합이라도 가능
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>Y'CbCr 4:2:0, 4:2:2, 4:4:4 크로마 서브샘플링, 8 bit 컬러</td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">가변 프레임 레이트 (VFR) 지원</th>
      <td>
        예<sup><a href="#theora-foot-1">[1]</a></sup>
      </td>
    </tr>
    <tr>
      <th scope="row">브라우저 호환성</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Theora 지원</th>
              <td>3</td>
              <td>
                Yes<sup><a href="#theora-foot-2">[2]</a></sup>
              </td>
              <td>3.5</td>
              <td>No</td>
              <td>10.5</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컨테이너</th>
      <td><a href="/ko/docs/Web/Media/Formats/Containers#Ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환
      </th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">유지/보수 기관</th>
      <td><a href="https://www.xiph.org/">Xiph.org</a></td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>
        <a href="https://www.theora.org/doc/">https://www.theora.org/doc/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>오픈 프리-로열티</td>
    </tr>
  </tbody>
</table>

\[1] While Theora doesn't support Variable Frame Rate (VFR) within a single stream, multiple streams can be chained together within a single file, and each of those can have its own frame rate, thus allowing what is essentially VFR. However, this is impractical if the frame rate needs to change frequently.

\[2] Edge supports Theora with the optional [Web Media Extensions](https://www.microsoft.com/en-us/p/web-media-extensions/9n5tdp8vcmhs?activetab=pivot:overviewtab) add-on.

### VP8

**Video Processor 8** (**VP8**) 코덱은 최초 On2 Technologies가 개발했습니다. Google은 On2 인수 후, VP8 관련된 특허와 무관하게 완전한 오픈 로열티-프리 라이선스로 출시했습니다. 압축률과 품질의 면에서 VP8은 [AVC](#avc_h.264)에 견줄만 합니다.

브라우저가 지원한다면 V8에서 알파 채널을 쓸 수 있으며 비디오 뒤의 백그라운드 이미지를 알파 채널 픽셀과 겹쳐 볼 수도 있습니다.

HTML 콘텐츠로써 특히 [WebM](/ko/docs/Web/Media/Formats/Containers#WebM) 파일에 포함된 VP8을 지원하는 좋은 브라우저가 많습니다. 이는 VP8이 여러분의 콘텐츠로 좋은 선택이 될 수 있으며 가능하다면 더 좋은 VP9를 선택할 수도 있습니다. 웹브라우저는 WebRTC를 위해 VP8을 _반드시_ 지원해야 합니다. 하지만 HTML Audio video 엘리먼츠에는 꼭 VP8을 지원할 필요는 없습니다.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>level별 제한이 없는 한 무제한 임의의 값</td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 레이트</th>
      <td>임의 값</td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-기반 일고리즘</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>최대 16,384 x 16,384 픽셀</td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>Y'CbCr 4:2:0 크로마 서브샘플링, 8 bit 색 깊이</td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">가변 프레임 레이트 (VFR) 지원</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">지원 브라우저</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">VP8 지원</th>
              <td>25</td>
              <td>
                14<sup><a href="#vp8-foot-1">[1]</a></sup>
              </td>
              <td>4</td>
              <td>9</td>
              <td>16</td>
              <td>
                12.1<sup><a href="#vp8-foot-2">[2]</a></sup>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컨테이너</th>
      <td>
        <a href="/ko/docs/Web/Media/Formats/Containers#3GP">3GP</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#Ogg">Ogg</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#WebM">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환
      </th>
      <td>예; VP8은 WebRTC의 필수 코덱 중 하나</td>
    </tr>
    <tr>
      <th scope="row">유지/보수 기관</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>라이선스 및 로열티로부터 자유로운 오픈 소스</td>
    </tr>
  </tbody>
</table>

\[1] Edge support for VP8 requires the use of [Media Source Extensions](/ko/docs/Web/API/Media_Source_Extensions_API).

\[2] Safari only supports VP8 in WebRTC connections.

### VP9

**Video Processor 9** (**VP9**)는 구글이 VP8 표준의 후속으로 개발하였습니다. VP8과 마찬가지로 VP9는 완전한 로열티-프리 오픈 소스입니다. 인코딩/디코딩 퍼포먼스는 AVC에 비해 더 높은 품질을 유지하면서도 약간 더 빠릅니다. VP9로 인코딩한 비디오의 품질은 비슷한 수준의 비트레이트에서 HEVC에 견줄만합니다.

VP9의 main profile은 4:2:0 크로마 서브 샘플링에서 8-bit 색 깊이 모드만을 지원합니다. 하지만 더 깊은 색상 모드와 전체 범위의 크로마 서브샘플링을 지원하는 프로파일도 가지고 있습니다. HDR 기능도 있으며 프레임 레이트, 영상 비율, 프레임 사이즈를 자유롭게 선택할 수 있는 오셥도 제공합니다.

VP9는 광범위한 브라우저가 지원하고 있으며 하드웨어 구현체로 상당히 퍼져있습니다. VP9는 [WebM](/ko/docs/Web/Media/Formats/Containers#WebM)에서만 사용할 수 있는 두 코덱 중 하나입니다(나머지 하나는 [VP8](#vp8)). 하지만 Safari는 WebM 및 VP9 모두 지원하지 않으므로 VP9를 사용할 경우 iPhone, iPad, Mac에서 AVC나 HEVCS등 다른 포맷을 대체할 수 있도록 만들어야 합니다.

Safari 지원이 빠져있지만 WebM 컨테이너를 쓸 수 있고 Safari 사용자에게 AVC/HEVC 대체 포맷 제공이 가능하다면 VP9은 좋은 선택입니다. 상용 코덱 대신에 오픈 코덱을 쓰기로 결정했다면 더할 나위 없죠. 호환 포맷을 제공할 수 없지만 Safari 사용자도 잃을 수 없다면 WebM에 VP9는 차선책이 좋을 겁니다. 아니라면 다른 코덱을 고려해 보셔야겠죠.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">지원 비트레이트</th>
      <td>level 제한이 없는 한 무제한 임의의 값</td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 레이트</th>
      <td>임의 값</td>
    </tr>
    <tr>
      <th scope="row">압축</th>
      <td>
        손실
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-기반 알고리즘</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">지원 프레임 크기</th>
      <td>최대 65,536 x 65,536 픽셀</td>
    </tr>
    <tr>
      <th scope="row">지원 컬러 모드</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Profile</th>
              <th scope="col">색 깊이</th>
              <th scope="col">크로마 서브샘플링</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Profile 0</th>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 1</th>
              <td>8</td>
              <td>4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Profile 2</th>
              <td>10 to 12</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 3</th>
              <td>10 to 12</td>
              <td>4:2:0, 4:2:2, and f:4:4</td>
            </tr>
          </tbody>
        </table>
        <p>
          지원 색 공간:
          <a href="https://en.wikipedia.org/wiki/Rec._601">Rec. 601</a>,
          <a href="https://en.wikipedia.org/wiki/Rec._709">Rec. 709</a>,
          <a href="https://en.wikipedia.org/wiki/Rec._2020">Rec. 2020</a>,
          <a href="https://en.wikipedia.org/wiki/NTSC#SMPTE_C">SMPTE C</a>,
          SMPTE-240M (obsolete; replaced by Rec. 709),
          <a href="https://en.wikipedia.org/wiki/SRGB">sRGB</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR 지원</th>
      <td>
        예; HDR10+,
        <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">HLG</a>,
        <a href="https://en.wikipedia.org/wiki/Perceptual_Quantizer">PQ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">가변 프레임 레이트 (VFR) 지원</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">브라우저 호환성</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">기능</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Internet Explorer</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">VP9 지원</th>
              <td>29</td>
              <td>14</td>
              <td>28</td>
              <td>No</td>
              <td>10.6</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">지원 컨테이너</th>
      <td>
        <a href="/ko/docs/Web/Media/Formats/Containers#MP4">MP4</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#Ogg">Ogg</a>,
        <a href="/ko/docs/Web/Media/Formats/Containers#WebM">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/ko/docs/Web/API/WebRTC_API">WebRTC</a> 호환
      </th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">유지/보수 기관</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">스펙</th>
      <td>
        <a href="https://www.webmproject.org/vp9/"
          >https://www.webmproject.org/vp9/</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">라이선스</th>
      <td>라이선스 및 로열티-프리 오픈 소스requirements</td>
    </tr>
  </tbody>
</table>

## 코덱 선택하기

어떤 코덱을 사용할지는 스스로 꼬리에 꼬리를 무는 질문을 던진 끝에 답을 얻을 수 있습니다.:

- 오픈 포맷을 사용할건가요? 상용 코덱도 염두에 두고 있나요?
- 한 비디오를 여러 포맷으로 생산할 여력이 되나요? fallback 옵션을 제공할 수 있다면 의사 결정 과정을 단순화 할 수 있습니다.
- 호환성을 포기할 수 있는 브라우저가 있나요?
- 보장하는 커버리지 상 가장 오래된 브라우저는 어떤 것인가요? 예를 들어 지난 5년간 출시된 모든 브라우저를 지원할지, 1년 사이의 브라우저만을 지원할지?

아래 섹션에서는 특정 유즈케이스에서 추천할만한 코덱을 명시합니다. 각 유즈케이스마다 최대 두 개의 추천 코덱을 볼 수 있습니다. 특정 유즈케이스에 베스트인 코덱이 상용이거나 로열티 지불이 필요하다면 생각해 볼 두 가지 옵션이 있습니다: 로열티 프리 오픈 코덱을 선택하거나, 상용 라이선스를 따르거나.

각 비디오당 하나의 포맷만 제공할 수 있다면 필요한 요구사항을 최대한 만족하는 최적의 포맷을 선택해야 합니다. 첫 번째 추천 코덱은 품질과 퍼포먼스, 호환성을 최대한 고려한 것이며 두번째는 품질과 퀄리티, 크기를 조금 희생하더라도 최대한의 호환성을 가지는 옵션입니다.

### Recommendations for everyday videos

우선 블로그나 정보형 사이트, 소규모 기업 웹사이트 등 상품을 설명하기 위한 비디오(비디오 자체가 상품은 아닌)를 위한 옵션을 알아봅시다.

1. **[WebM](/ko/docs/Web/Media/Formats/Containers#WebM)** 컨테이너에 비디오는 **[VP8](#vp8), 오디오는** **[Opus](/ko/docs/Web/Media/Formats/Audio_codecs#Opus)** 코덱을 사용합니다. 이들은 로열티-프리 오픈 포맷이지만 최근 브라우저에서만 폭넓게 지원하는 경향이 있어 폴백 지원이 필수적입니다.

   ```js
   <video controls src="filename.webm"></video>
   ```

2. **[MP4](/ko/docs/Web/Media/Formats/Containers#MP4)** 컨테이너에 비디오 코덱은 **[AVC](#avc_h.264)** (**H.264**) 오디오 코덱은 **[AAC](/ko/docs/Web/Media/Formats/Audio_codecs#AAC)** 를 사용합니다. MP4 컨테이너에 AVC, AAC 조합은 모든 주요 브라우저에서 폭넓게 지원하는 조합이며 대부분의 유즈케이스에서 좋은 품질을 보여주기 때문입니다. 하지만 라이선스 요구사항에 대해 컴플라이언스 이슈는 없는 지 확인이 필요하죠.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> **참고:** {{HTMLElement("&lt;video&gt;")}} 엘리먼트는 자식으로 {{HTMLElement("source")}} 엘리먼트 유무에 상관 없이 `</video>` 닫기 태그가 필요하다는 것을 잊지 마세요.

### 고품질 비디오 제공을 위한 추천

여러분의 목표가 최대한 높은 품질의 비디오를 재생하는 것이라면 가능한한 다양한 포맷으로 제공할 수 있는 방법을 모색해야합니다. 최신의 코덱일수록 고품질 비디오를 지원하지만 반대로 브라우저 호환성은 떨어집니다.

1. WebM 컨테이너에 비디오 코덱은 AV1, 오디오 코덱은 Opus. AV1 인코딩 시 6.3 High level 같은 높은 전문 프로파일을 사용할 수 있다면 훌륭한 품질의 비디오를 4K/8K 해상도로 제공할 수 있습니다. 오디오 인코딩 시 Opus Fullband 프로파일로 48 kHz 샘플링 레이트를 사용한다면 사람이 들을 수 있는 거의 모든 주파수를 캡쳐할 수 있죠.

   ```js
   <video controls src="filename.webm"></video>
   ```

2. MP4 컨테이너에 비디오 코덱으로 [HEVC](#hevc_h.265) 를 쓰되 프로파일은 Main 4:2:2 10/12 bit 색 깊이, 최대 Main 4:4:4 16 bit 색 깊이 수준의 고급 Main 프로파일을 사용합니다. 비트레이트를 높이면 놀라운 색 재현과 훌륭한 그래픽 퀄리티를 보여줄 것입니다. 또한 하이 다이나믹 레인지 비디오를 위한 HDR 메타데이터도 추가할 수 있습니다. 오디오는 ACC 인코딩 시 높은 샘플링 레이트(최소 48 kHz, 96 kHz 권장)에 fast-encoding이 아닌 complex-encoding을 사용합니다.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### 비디오 보존, 편집, 믹싱을 위한 추천

웹 브라우저에서 사용 가능한 무손실-아니면 거의 무손실-비디오 코덱은 현재 없습니다. 이유는 간단한데:비디오는 거대합니다. 무손실 압축은 손실 압축에 비해 비효율적입니다. 예를 들어 4:2:0 크로마 서브샘플링의 무압축 1080p 비디오(1920\*1080 픽셀)는 최소 비트레이트가 1.5Gbps가 넘죠. FFV1(브라우저 미지원) 같은 무손실 압축 코덱을 사용하면 콘텐츠에 따라 다르지만 600 Mbps 근처로 줄일 수 있습니다. 하지만 네트워크로 보내이겐 여전히 엄청난 크기이며 현실적으로 불가능한 사이즈입니다.

손실 코덱이 무손실 모드를 가지고 있다 하여도 별 반 다르지 않는데;현재 웹 브라우저에서 무손실 모드를 구현하고 있지 않기 때문입니다. 최선은 손실 압축을 사용하는 코덱 중 최대한 고품질 코덱을 선택한 뒤 최소한의 압축만 수행하도록 설정하는 것입니다. 한가지 방법은 코덱을 설정하기를 "fast" 압축을 선택하는 것입니다. 일반적으로 이는 압축을 최소화합니다.

#### 외부에 비디오 보존

여러분의 웹 사이트나 앱 외부 영역에 보존 목적의 비디오라면 무압축 원본 비디오 데이터를 압축하는 유틸리티를 사용하세요. 예를들어 [x264](https://www.videolan.org/developers/x264.html) 유틸리티는 매우 높은 비트레이트로 [AVC](#avc_h.264) 인코딩을 할 수 있습니다:

```
x264 --crf 18 -preset ultrafast --output outfilename.mp4 infile
```

다른 코덱들도 충분한 여유가 있다면 더 나은 최고-품질 압축을 보여줄지도 모릅니다, 단지 그 인코더들은 엄청 느려서 위 압축으로 얻어지는 거의 무손실 비디오가 전체적으로 비슷한 품질을 보여주면서도 상당히 빠를겁니다.

#### 비디오 녹화

무손실에 가까운 비디오를 보여줘야 한다는 제약이 있다면, [AVC](#avc_h.264) 또는 [AV1](#av1)를 고려해 볼 필요가 있습니다. 예를들어 비디오를 녹화하기 위해 [MediaStream Recording API](/ko/docs/Web/API/MediaStream_Recording_API)를 사용한다면, {{domxref("MediaRecorder")}} 객체를 생성하는 코드는 아래와 같습니다:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

위 예제에서 `MediaRecorder`를 생성하여 BT.2100 HDR, 12-bit color 4:4:4 크로마 서브샘플링 설정으로 [AV1](#av1) 비디오 레코딩을, [FLAC](/ko/docs/Web/Media/Formats/Audio_codecs#FLAC)으로 무손실 오디오를 레코딩 하고 있습니다. 결과물 파일은 비디오 오디오 트랙 합쳐 800Mbps를 넘지 않을 겁니다. 하드웨어 성능이나 요구사항, 사용하고자 하는 코덱에 따라 설정 값을 변경할 수 있습니다. 위의 비트 레이트 값은 네트워크 실사용 케이스에선 비현실적인 값이며 로컬 장치에서만 가능하겠죠.

`codecs` 파라미터 값을 '.' 기준으로 나눠서 의미를 분석해 봅시다:

| 값     | 설명                                                                                                                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | 4문자 코드 (4CC-4 Character Code) [AV1](#av1) 코덱을 의미합니다.                                                                                                                                                                |
| `2`    | 프로파일. 2는 Professional profile. 1은 High profile, 0은 Main profile.                                                                                                                                                         |
| `19H`  | 레벨과 티어. AV 스펙의 [A.3](https://aomediacodec.github.io/av1-spec/#levels)의 표에서 설명, Level 6.3의 High tier를 의미합니다                                                                                                 |
| `12`   | 색 깊이. 컴포넌트당 12bit를 의미. 8, 10도 가능하나 AV1에서 표현할 수 있는 가장 정확한 색 깊이 값이 12입니다.                                                                                                                    |
| `0`    | 모노크롬 모드 플래그. 1로 지정하면 색차 성분은 녹화되지 않으며 휘도 성분만 축적되어 그레이스케일 이미ㅣ지로 표현됩니다. 색상을 사용할 것이므로 0으로 지정하였습니다.                                                            |
| `000`  | 크로마 서브샘플링 모드. AV1 스펙의 [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics)에 설명. 모노크롬 모드 값이 0일 때 000 값은 4:4:4 크로마 서브샘플링 또는 색상 손실이 없어야 함을 나태냅니다. |
| `09`   | 사용할 색 공간. AV1 스펙의 [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics)에서 설명 9는 HDR을 위한 BT.2020 색역을 의미합니다.                                                                  |
| `16`   | 전송시 사용할 색 공간. 마찬가지로 [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics)에서 설명; 16은 BT.2100 PQ 컬러로 전송하겠다는 의미입니다.                                                    |
| `09`   | [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) 에서 설명하는 계수 행렬. 9 값은 유동 휘도 값의 BT.2020 색역을 사용하겠다는 의미입니다. BT.2010 YbCbCr와 동일한 의미입니다.                     |
| `1`    | "full range" 비디오 플래그. 1은 전체 컬러 영역을 녹화하겠다는 의미입니다.                                                                                                                                                       |

선택하고자 하는 코덱 문서에 `codecs` 파라미터 값이 받아들이는 설정이 설명되어 있습니다.

## 더 보기

- [웹 오디오 코덱 가이드](/ko/docs/Web/Media/Formats/Audio_codecs)
- [미디어 컨테이너 포맷(파일 타입)](/ko/docs/Web/Media/Formats/Containers)
- [웹 콘텐츠에서 미디어 사용시 이슈 해결](/ko/docs/Web/Media/Formats/Support_issues)
- [WebRTC에서 사용하는 코덱](/ko/docs/Web/Media/Formats/WebRTC_codecs)
- {{RFC(6381)}}: The "Codecs" and "Profiles" parameters for "Bucket" media types
- {{RFC(5334)}}: Ogg Media Types
- {{RFC(3839)}}: MIME Type Registrations for 3GPP Multimedia Files
- {{RFC(4381)}}: MIME Type Registrations for 3GPP2 Multimedia Files
- {{RFC(4337)}}: MIME Type Registrations for MPEG-4
