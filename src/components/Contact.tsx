import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('문의가 성공적으로 전송되었습니다!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">연락처</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            궁금하신 사항이 있으시면 언제든지 문의해 주세요. 빠르게 답변드리겠습니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6">문의하기</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  이름
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  이메일
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hong@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700">
                  제목
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="문의 제목을 입력하세요"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  메시지
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="문의 내용을 입력하세요"
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                전송하기
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-6">오시는 길</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="mb-1">주소</p>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123<br />
                      KIKI 빌딩 5층
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="mb-1">전화</p>
                    <p className="text-gray-600">02-1234-5678</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="mb-1">이메일</p>
                    <p className="text-gray-600">contact@kiki-inc.jp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h4 className="mb-4">운영 시간</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>월요일 - 금요일</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>토요일</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>일요일 및 공휴일</span>
                  <span>휴무</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
