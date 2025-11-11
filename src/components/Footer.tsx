import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">K</span>
              </div>
              <span className="text-white">KIKI Inc.</span>
            </div>
            <p className="text-gray-400 mb-4">
              혁신과 창의성으로 미래를 만들어가는 기술 기업
            </p>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">회사</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">회사소개</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">팀</a></li>
              <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
              <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">서비스</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">웹 개발</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">모바일 앱</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX 디자인</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">클라우드 솔루션</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">지원</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-white transition-colors">문의하기</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">고객지원</a></li>
              <li><a href="#" className="hover:text-white transition-colors">파트너십</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 KIKI Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                쿠키정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
