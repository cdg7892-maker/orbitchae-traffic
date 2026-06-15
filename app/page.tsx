import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '목동교통사고한의원 오비채한의원 | 오목교역 자동차보험 100% 본인부담금 0원',
  description: '목동교통사고한의원 오비채한의원. 오목교역 1번출구 도보 2분. 목동·양천구·신정동·영등포 교통사고 후유증 전문. 자동차보험 100% 본인부담금 0원. 편타증후군·허리통증·어지럼증·불면 치료. 화·목 야간 20:30. 02-2644-7555',
  alternates: { canonical: 'https://orbitchae-traffic.vercel.app' },
}

const CLINICS = [
  { icon: '🚗', title: '교통사고 후유증', desc: '목동 교통사고 후유증 전문 진료. 사고 직후부터 만성 후유증까지 체계적 치료.', href: '/aftereffect' },
  { icon: '🦷', title: '목·어깨 통증', desc: '편타증후군·경추 염좌. 목동 교통사고 목어깨 통증 침·약침·추나 치료.', href: '/neck' },
  { icon: '🦴', title: '허리·골반 통증', desc: '요추 염좌·디스크 악화. 자동차보험 추나요법 100% 적용.', href: '/waist' },
  { icon: '🧠', title: '두통·어지럼증', desc: '교통사고 후 두통·어지럼증. 경추기원성 두통 침·약침 치료.', href: '/headache' },
  { icon: '😴', title: '불면·두근거림', desc: '교통사고 후 불면·불안·두근거림. 자율신경 불균형 한의 치료.', href: '/insomnia' },
  { icon: '💉', title: '추나요법', desc: '자동차보험 추나 100% 본인부담금 0원. 척추·골반 교정.', href: '/chuna' },
  { icon: '🌿', title: '어혈 제거 한약', desc: '교통사고 어혈 제거 당귀수산·작약감초탕 처방. 자동차보험 적용.', href: '/herb' },
  { icon: '📋', title: '자동차보험 접수', desc: '사고접수번호만 있으면 당일 내원 가능. 본인부담금 0원 안내.', href: '/insurance' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #3d2a14 0%, #5c3d1e 60%, #8B6B3D 100%)', padding: '80px 24px 72px', textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ fontSize: '12px', letterSpacing: '.2em', color: 'rgba(255,255,255,.6)', marginBottom: '20px' }}>
            목동 · 오목교역 · 양천구 · 신정동 · 영등포
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: '#fff', lineHeight: 1.3, marginBottom: '20px' }}>
            목동교통사고한의원<br />오비채한의원
          </h1>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,.8)', lineHeight: 1.9, marginBottom: '36px' }}>
            자동차보험 100% · 본인부담금 0원<br />
            오목교역 1번출구 도보 2분 · 화·목 야간 20:30 · 토요일 정상진료
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:02-2644-7555" style={{ background: '#fff', color: '#3d2a14', padding: '14px 32px', borderRadius: '4px', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
              📞 02-2644-7555
            </a>
            <a href="https://m.booking.naver.com/booking/13/bizes/1474589/items/6972011?area=pll&lang=ko&theme=place" target="_blank" rel="noopener noreferrer"
              style={{ background: 'transparent', color: '#fff', padding: '14px 32px', borderRadius: '4px', fontSize: '15px', fontWeight: 400, textDecoration: 'none', border: '1px solid rgba(255,255,255,.4)' }}>
              네이버 예약하기
            </a>
          </div>
        </div>
      </section>

      {/* 자동차보험 안내 배너 */}
      <section style={{ background: '#fdf9f4', borderBottom: '1px solid #e4e1d9', padding: '20px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[
            '✅ 자동차보험 100% 적용',
            '✅ 본인부담금 0원',
            '✅ 당일 내원 가능',
            '✅ RMSK 초음파 진단',
            '✅ 차의현 원장 직접 진료',
          ].map(s => (
            <span key={s} style={{ fontSize: '13px', fontWeight: 500, color: '#3d2a14' }}>{s}</span>
          ))}
        </div>
      </section>

      {/* 진료 항목 그리드 */}
      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '.2em', color: '#8B6B3D', marginBottom: '12px' }}>TREATMENT</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 400, color: '#161616' }}>
              목동교통사고한의원 오비채한의원<br />교통사고 후유증 진료
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2px' }}>
            {CLINICS.map((c, i) => (
              <a key={c.title} href={c.href} style={{ background: i % 2 === 0 ? '#f7f6f3' : '#fff', border: '1px solid #e4e1d9', padding: '32px 24px', display: 'block', textDecoration: 'none', transition: 'border-color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#8B6B3D')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#e4e1d9')}>
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{c.icon}</div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '17px', fontWeight: 400, color: '#161616', marginBottom: '8px' }}>{c.title}</div>
                <div style={{ fontSize: '13px', fontWeight: 300, color: '#888', lineHeight: 1.8 }}>{c.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 원장 소개 */}
      <section style={{ padding: '72px 24px', background: '#f7f6f3' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <img src="https://orbitchae.com/images/doctor-profile.jpg" alt="목동교통사고한의원 오비채한의원 차의현 원장"
              style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '.2em', color: '#8B6B3D', marginBottom: '12px' }}>DOCTOR</div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 400, color: '#161616', marginBottom: '6px' }}>차의현</div>
              <div style={{ fontSize: '14px', color: '#8B6B3D', fontWeight: 500, marginBottom: '20px' }}>오비채한의원 대표원장</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'RMSK 미국 근골격계 초음파 자격',
                  '현대고방학회 복진 실습 강의',
                  '교통사고 후유증 전문 진료',
                  '자동차보험 100% 직접 청구',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', fontWeight: 300, color: '#555' }}>
                    <span style={{ color: '#8B6B3D', flexShrink: 0 }}>·</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 치료 프로세스 */}
      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '.2em', color: '#8B6B3D', marginBottom: '12px' }}>PROCESS</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400, color: '#161616' }}>자동차보험 접수 방법</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { step: '01', title: '사고 후 내원', desc: '사고 직후 빠를수록 좋습니다. 사고접수번호, 대인담당자 연락처, 상대방 보험회사명 세 가지만 준비하세요. 당일 내원 가능합니다.' },
              { step: '02', title: 'RMSK 초음파 정밀 진단', desc: '차의현 원장이 직접 RMSK 초음파로 경추·요추·근육·인대 손상 상태를 확인합니다. 눈으로 보이는 진단을 드립니다.' },
              { step: '03', title: '맞춤 치료 시행', desc: '침·약침·추나·어혈한약을 자동차보험 100% 적용으로 치료합니다. 본인부담금 0원입니다.' },
              { step: '04', title: '회복까지 책임 진료', desc: '차의현 원장이 처음부터 끝까지 직접 진료합니다. 보험 청구 서류도 한의원에서 준비해드립니다.' },
            ].map((item, i) => (
              <div key={item.step} style={{ background: i % 2 === 0 ? '#fff' : '#f7f6f3', border: '1px solid #e4e1d9', padding: '24px 28px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#8B6B3D', letterSpacing: '.12em', minWidth: '28px', marginTop: '4px' }}>{item.step}</div>
                <div>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 400, color: '#161616', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '14px', fontWeight: 300, color: '#888', lineHeight: 1.9 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는길 */}
      <section style={{ padding: '72px 24px', background: '#f7f6f3' }} id="access">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '.2em', color: '#8B6B3D', marginBottom: '12px' }}>LOCATION</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400, color: '#161616', marginBottom: '8px' }}>오시는길</h2>
            <p style={{ fontSize: '14px', fontWeight: 300, color: '#888' }}>목동·양천구·신정동·영등포에서 모두 편리하게 내원하실 수 있습니다</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e4e1d9', marginBottom: '24px', height: '300px' }}>
            <iframe src="https://maps.google.com/maps?q=37.5247,126.8747&z=17&output=embed&hl=ko"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="목동교통사고한의원 오비채한의원 오시는길" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { label: '주소', value: '서울 양천구 오목로 325 대학빌딩 2층' },
              { label: '교통', value: '오목교역 1번출구 도보 2분' },
              { label: '진료시간', value: '월·수·금 09:30~18:30 / 화·목 09:30~20:30 / 토 09:00~14:00' },
              { label: '전화', value: '02-2644-7555' },
            ].map(item => (
              <div key={item.label} style={{ background: '#fff', border: '1px solid #e4e1d9', borderRadius: '6px', padding: '20px' }}>
                <div style={{ fontSize: '11px', color: '#8B6B3D', letterSpacing: '.1em', marginBottom: '6px' }}>{item.label}</div>
                <div style={{ fontSize: '14px', fontWeight: 300, color: '#444', lineHeight: 1.7 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #3d2a14, #5c3d1e)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 300, color: '#fff', marginBottom: '16px', lineHeight: 1.4 }}>
            목동·오목교역·양천구·신정동·영등포<br />
            <strong style={{ fontWeight: 600 }}>교통사고 후유증, 지금 바로 치료받으세요.</strong>
          </div>
          <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,.7)', marginBottom: '32px' }}>
            자동차보험 100% · 본인부담금 0원 · 당일 내원 가능
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:02-2644-7555" style={{ background: '#fff', color: '#3d2a14', padding: '16px 36px', borderRadius: '4px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>
              📞 02-2644-7555
            </a>
            <a href="https://kko.to/9Kn9qaDzT0" target="_blank" rel="noopener noreferrer"
              style={{ background: 'transparent', color: '#fff', padding: '16px 36px', borderRadius: '4px', fontSize: '16px', fontWeight: 400, textDecoration: 'none', border: '1px solid rgba(255,255,255,.4)' }}>
              카카오맵 오시는길
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
