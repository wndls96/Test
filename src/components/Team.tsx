import { Linkedin, Twitter } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: '김민수',
      role: '대표이사 / CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: '15년 이상의 IT 업계 경험을 바탕으로 회사를 이끌고 있습니다'
    },
    {
      name: '이지영',
      role: 'CTO / 기술이사',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: '클라우드 및 인프라 전문가로 기술 전략을 담당합니다'
    },
    {
      name: '박준호',
      role: '개발팀장',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      bio: '풀스택 개발 전문가로 개발팀을 리드하고 있습니다'
    },
    {
      name: '정수현',
      role: '디자인팀장',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'UX/UI 디자인 전문가로 사용자 경험을 설계합니다'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">우리 팀</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            열정과 전문성을 갖춘 최고의 인재들이 함께합니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors">
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">전문 인력</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-blue-600 mb-2">100+</div>
            <p className="text-gray-600">완료 프로젝트</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-blue-600 mb-2">98%</div>
            <p className="text-gray-600">고객 만족도</p>
          </div>
        </div>
      </div>
    </section>
  );
}
