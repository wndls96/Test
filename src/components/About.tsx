import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: '목표 중심',
      description: '명확한 목표 설정과 체계적인 실행으로 최상의 결과를 만들어냅니다'
    },
    {
      icon: Users,
      title: '팀워크',
      description: '협력과 소통을 통해 시너지를 창출하고 함께 성장합니다'
    },
    {
      icon: Lightbulb,
      title: '혁신',
      description: '끊임없는 도전과 창의적 사고로 새로운 가치를 창출합니다'
    },
    {
      icon: Award,
      title: '전문성',
      description: '깊이 있는 전문 지식과 풍부한 경험으로 신뢰를 구축합니다'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">회사 소개</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            KIKI Inc.는 기술과 사람을 연결하여 더 나은 미래를 만들어가는 혁신 기업입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MjgwMDcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team meeting"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="mb-4">우리의 비전</h3>
            <p className="text-gray-600 mb-6">
              KIKI Inc.는 2020년 설립 이후, 혁신적인 기술과 창의적인 솔루션으로 
              산업의 디지털 전환을 선도해왔습니다. 우리는 고객의 성공이 곧 우리의 
              성공이라는 철학 아래, 최고의 서비스와 솔루션을 제공하기 위해 노력합니다.
            </p>
            <p className="text-gray-600">
              글로벌 시장에서의 경쟁력을 갖춘 전문가 팀과 함께, 우리는 지속 가능한 
              성장과 혁신을 통해 업계를 리드하는 기업으로 자리매김하고 있습니다.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
