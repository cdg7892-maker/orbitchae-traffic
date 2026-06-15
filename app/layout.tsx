import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '목동교통사고한의원 오비채한의원 | 오목교역 자동차보험 100% 본인부담금 0원',
    template: '%s | 오비채한의원 교통사고',
  },
  description: '목동교통사고한의원 오비채한의원. 오목교역 1번출구 도보 2분. 목동·양천구·신정동·영등포 교통사고 후유증, 편타증후군, 목·어깨·허리 통증, 어지럼증, 불면증 한의 치료. 자동차보험 100% 본인부담금 0원. 화·목 야간 20:30. 02-2644-7555',
  keywords: '목동교통사고한의원,목동교통사고,오목교역교통사고,양천구교통사고한의원,신정동교통사고,영등포교통사고한의원,교통사고자동차보험,목동편타증후군,교통사고후유증목동',
  verification: {
    other: {
      'naver-site-verification': '979382c9b666f7242478fe30216404aab1ce4295',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://orbitchae-traffic.vercel.app',
    siteName: '오비채한의원 교통사고',
    images: [{ url: 'https://orbitchae.com/images/thumb-pain.png', width: 800, height: 800 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif", background: '#fff', color: '#161616' }}>
        {/* 상단 바 */}
        <div style={{ background: '#3d2a14', color: 'rgba(255,255,255,.7)', fontSize: '12px', padding: '8px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>목동교통사고한의원 오비채한의원 · 자동차보험 100% 본인부담금 0원</span>
          <a href="tel:02-2644-7555" style={{ color: '#fff', fontWeight: 600 }}>☎ 02-2644-7555</a>
        </div>

        {/* 네비게이션 */}
        <nav style={{ background: '#fff', borderBottom: '1px solid #e4e1d9', padding: '0 24px', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
            <Link href="/" style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 400, color: '#3d2a14', textDecoration: 'none' }}>
              오비채한의원 <span style={{ color: '#8B6B3D', fontSize: '13px' }}>교통사고</span>
            </Link>
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {[
                { href: '/aftereffect', label: '교통사고 후유증' },
                { href: '/neck', label: '목·어깨 통증' },
                { href: '/waist', label: '허리·골반 통증' },
                { href: '/headache', label: '두통·어지럼증' },
                { href: '/insomnia', label: '불면증' },
                { href: '/chuna', label: '추나요법' },
                { href: '/herb', label: '어혈 한약' },
              ].map(item => (
                <a key={item.href} href={item.href} style={{ fontSize: '13px', color: '#555', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* 플로팅 버튼 */}
        <div style={{ position: 'fixed', bottom: '24px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 200 }}>
          <a href="tel:02-2644-7555" style={{ background: '#3d2a14', color: '#fff', padding: '12px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
            📞 전화
          </a>
          <a href="https://m.booking.naver.com/booking/13/bizes/1474589/items/6972011?area=pll&lang=ko&theme=place" target="_blank" rel="noopener noreferrer"
            style={{ background: '#03C75A', color: '#fff', padding: '12px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
            네이버 예약
          </a>
        </div>

        {/* 푸터 */}
        <footer style={{ background: '#1a1208', color: 'rgba(255,255,255,.4)', padding: '40px 24px', fontSize: '12px', lineHeight: 1.8 }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>오비채한의원 교통사고</div>
            <div>서울 양천구 오목로 325 대학빌딩 2층 · 오목교역 1번출구 도보 2분</div>
            <div>대표원장: 차의현 · 사업자등록번호: 665-24-02252 · 대표번호: 02-2644-7555</div>
            <div style={{ marginTop: '8px' }}>
              <a href="https://orbitchae.com" style={{ color: '#8B6B3D' }}>오비채한의원 메인 홈페이지 →</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
