import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code, Palette, Database, Cloud, Smartphone, BarChart } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: '웹 개발',
      description: '최신 기술 스택을 활용한 확장 가능하고 안정적인 웹 애플리케이션 개발',
      features: ['React/Next.js', '백엔드 개발', 'API 통합']
    },
    {
      icon: Smartphone,
      title: '모바일 앱 개발',
      description: 'iOS와 Android를 위한 네이티브 및 크로스 플랫폼 모바일 애플리케이션',
      features: ['React Native', 'Flutter', 'iOS/Android']
    },
    {
      icon: Palette,
      title: 'UI/UX 디자인',
      description: '사용자 중심의 직관적이고 아름다운 인터페이스 디자인',
      features: ['사용자 리서치', '프로토타이핑', '디자인 시스템']
    },
    {
      icon: Cloud,
      title: '클라우드 솔루션',
      description: '확장 가능하고 안전한 클라우드 인프라 구축 및 관리',
      features: ['AWS/Azure', 'DevOps', '인프라 자동화']
    },
    {
      icon: Database,
      title: '데이터베이스 설계',
      description: '효율적이고 안정적인 데이터베이스 아키텍처 설계 및 최적화',
      features: ['SQL/NoSQL', '데이터 모델링', '성능 최적화']
    },
    {
      icon: BarChart,
      title: '비즈니스 분석',
      description: '데이터 기반 인사이트를 통한 비즈니스 의사결정 지원',
      features: ['데이터 분석', 'BI 대시보드', '리포팅']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">서비스</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            고객의 비즈니스 목표를 달성하기 위한 포괄적인 기술 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="mb-4 text-white">맞춤형 솔루션이 필요하신가요?</h3>
              <p className="text-blue-50 mb-6">
                귀사의 특별한 요구사항에 맞는 커스터마이징된 솔루션을 제공해드립니다. 
                전문가 팀과 상담하여 최적의 방안을 찾아보세요.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                상담 신청하기
              </button>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjI3NDA3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
