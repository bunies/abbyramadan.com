import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    id: 1,
    role: 'Capital Markets Associate',
    company: 'Above Lending',
    period: 'January 2025 - Present',
    description:
      'Leading capital markets initiatives and streamlining financial reporting processes.',
    achievements: [
      'Streamlined reporting processes by consolidating redundant workbooks and improving SQL code clarity, reducing reporting prep time by 30%',
      'Visualized loss curves and forecasted monthly vintage performance for $100mm+ loan portfolios to inform internal decision-making',
      'Interpreted credit agreements and corrected report logic, creating $500,000 in leverage at company credit facility',
      'Enhanced loan allocation tools and aligned processes with legal documents to ensure regulatory compliance',
      'Collaborated cross-functionally to support strategic initiatives across Capital Markets and other teams',
    ],
  },
  {
    id: 2,
    role: 'Structured Finance Analyst',
    company: 'Golub Capital',
    period: 'September 2022 - December 2024',
    description:
      'Monitored and analyzed multi-million dollar asset-backed securities portfolios.',
    achievements: [
      'Monitored and analyzed 10+ multi-million dollar asset-backed securities to ensure compliance with covenants',
      'Proposed trades of underlying assets to structured products after modeling forecasted performance and risks',
      'Advised external teams on compliance by interpreting governing indentures and applicable laws',
      'Negotiated terms with rating agencies and presented financial data to bolster our position',
    ],
  },
  {
    id: 3,
    role: 'Examiner',
    company: 'CME Group',
    period: 'January 2022 - September 2022',
    description:
      'Conducted regulatory examinations and ensured compliance with CFTC regulations.',
    achievements: [
      'Reconciled firm-produced and third-party documentation to confirm accuracy of financial statements',
      'Organized and disseminated information regarding examinations and abided by CFTC regulations',
      'Assisted in testing judgmentally selected samples and researching regulations as part of examination team',
    ],
  },
  {
    id: 4,
    role: 'Regional Tax Intern',
    company: 'EY',
    period: 'January 2020 - March 2020',
    description:
      'Supported Global Compliance & Reporting tax team with international tax documentation.',
    achievements: [
      'Fulfilled client needs by documenting international tax rules to provide Global Compliance & Reporting tax team',
      'Prepared and organized client workpapers and performed substantive analytical procedures',
      'Received training regarding corporate tax return preparation and computation of tax liability for different entities',
    ],
  },
  {
    id: 5,
    role: 'Accounting Intern',
    company: "R.J. O'Brien & Associates LLC",
    period: 'June 2019 - August 2019',
    description:
      'Monitored internal controls and streamlined regulatory reporting processes.',
    achievements: [
      'Monitored internal controls and utilized XML schema to streamline reporting of monthly regulatory reports',
      'Created and analyzed rolling charts in Excel for tracking trends of account balances and ratios',
    ],
  },
];

const skills = {
  Technical: ['Excel', 'Python', 'R', 'Java', 'SQL'],
  Analytics: [
    'Tableau',
    'PowerBI',
    'Power Automate',
    'Data Analysis',
    'Financial Modeling',
  ],
  Finance: [
    'Asset-Backed Securities',
    'Credit Analysis',
    'Regulatory Compliance',
    'Tax Preparation',
    'Risk Modeling',
  ],
};

const interests = [
  {
    id: 1,
    title: 'Digital Illustration',
    description:
      'Creating digital artwork and illustrations using various tools and techniques.',
    category: 'Art',
  },
  {
    id: 2,
    title: 'Animation',
    description:
      'Exploring animation techniques and bringing stories to life through motion.',
    category: 'Art',
  },
  {
    id: 3,
    title: 'Music Performance',
    description: 'Playing the flute and participating in musical performances.',
    category: 'Music',
  },
  {
    id: 4,
    title: 'Community Service',
    description:
      'Volunteering for local organizations and community initiatives.',
    category: 'Service',
  },
  {
    id: 5,
    title: 'Running',
    description:
      'Participating in running events and maintaining an active lifestyle.',
    category: 'Fitness',
  },
];

export default function Home() {

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section
        id='home'
        className='flex flex-col items-center justify-center min-h-[100vh] px-4'
      >
        <div className='max-w-4xl w-full flex flex-col gap-8 text-center'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-6xl sm:text-8xl font-bold tracking-tight'>
              Abby L. Ramadan
            </h1>
            <p className='text-2xl sm:text-3xl text-gray-400'>
              Financial Analyst & Creative Mind
            </p>
          </div>

          <div className='flex flex-col gap-4 max-w-2xl mx-auto'>
            <p className='text-lg text-gray-300 leading-relaxed'>
              Welcome to my digital space. I blend financial expertise with
              creative expression, turning complex data into actionable
              insights.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center pt-8'>
            <Button asChild size='lg'>
              <a href='#experience'>View Experience</a>
            </Button>
            <Button asChild variant='outline' size='lg' className='group'>
              <a href='#interests'>
                View Interests
                <span className='inline-block ml-2 group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </a>
            </Button>
          </div>

          <div className='pt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl font-bold mb-2'>6+</div>
              <div className='text-gray-400 text-sm uppercase tracking-wider'>
                Years Experience
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold mb-2'>$100M+</div>
              <div className='text-gray-400 text-sm uppercase tracking-wider'>
                Assets Managed
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold mb-2'>5</div>
              <div className='text-gray-400 text-sm uppercase tracking-wider'>
                Industries
              </div>
            </div>
          </div>

          <div className='mt-8 flex flex-wrap justify-center gap-4 text-gray-400'>
            <a
              href='mailto:abbyramadan98@gmail.com'
              className='hover:text-white transition-colors'
            >
              abbyramadan98@gmail.com
            </a>
            <span>•</span>
            <span>Chicago, IL</span>
            <span>•</span>
            <a
              href='https://linkedin.com/in/abby-ramadan/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='min-h-[100vh] px-4 py-20'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-16 text-center'>
            <h2 className='text-5xl sm:text-6xl font-bold mb-4'>
              Experience
            </h2>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
              A journey through finance, from analysis to strategic leadership.
            </p>
          </div>

          <div className='mb-20'>
            <h3 className='text-3xl font-bold mb-8'>
              Professional Journey
            </h3>
            <div className='flex flex-col gap-6'>
              {experiences.map(exp => (
                <Card
                  key={exp.id}
                  className='border-gray-800 bg-gray-950'
                >
                  <CardHeader>
                    <CardTitle>{exp.role}</CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.period}
                    </CardDescription>
                    <p className='text-gray-300 mt-3'>{exp.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className='flex flex-col gap-2'>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className='flex items-start'>
                          <span className='text-gray-500 mr-2'>▪</span>
                          <span className='text-gray-400'>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className='mb-20'>
            <h3 className='text-3xl font-bold mb-8'>
              Technical Skills
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {Object.entries(skills).map(([category, items]) => (
                <Card
                  key={category}
                  className='border-gray-800 bg-gray-950'
                >
                  <CardHeader>
                    <CardTitle className='text-xl'>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-wrap gap-2'>
                      {items.map(skill => (
                        <span
                          key={skill}
                          className='px-3 py-1 bg-gray-900 border border-gray-800 text-gray-300 text-sm rounded'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className='mb-20'>
            <h3 className='text-3xl font-bold mb-8'>Education</h3>
            <div className='flex flex-col gap-6'>
              <Card className='border-gray-800 bg-gray-950'>
                <CardHeader>
                  <CardTitle className='text-xl'>
                    Master of Accountancy
                  </CardTitle>
                  <CardDescription className='text-gray-400'>
                    Case Western Reserve University • January - December 2021
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-300'>
                    Advanced coursework in financial analysis and accounting
                    principles
                  </p>
                </CardContent>
              </Card>
              <Card className='border-gray-800 bg-gray-950'>
                <CardHeader>
                  <CardTitle className='text-xl'>
                    Bachelor of Science in Accounting
                  </CardTitle>
                  <CardDescription className='text-gray-400'>
                    Case Western Reserve University • August 2017 - December
                    2021
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-300'>Applied Data Science Minor</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className='text-center'>
            <p className='text-gray-400 mb-6'>
              Interested in working together? Let's connect and discuss how I
              can help with your financial challenges.
            </p>
            <Button asChild size='lg'>
              <a href='mailto:abbyramadan98@gmail.com'>
                Get in Touch
                <span className='ml-2'>→</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id='interests' className='min-h-[100vh] px-4 py-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-16 text-center'>
            <h2 className='text-5xl sm:text-6xl font-bold mb-4'>
              Interests & Hobbies
            </h2>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
              Beyond finance, I explore creative pursuits and community
              engagement.
            </p>
          </div>

          <div className='max-w-4xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              {interests.map((interest) => (
                <div key={interest.id} className='flex flex-col gap-2'>
                  <h3 className='text-2xl font-semibold'>{interest.title}</h3>
                  <p className='text-sm text-gray-500 uppercase tracking-wider'>{interest.category}</p>
                  <p className='text-gray-300 leading-relaxed'>
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-20 text-center border-t border-gray-800 pt-20'>
            <h3 className='text-3xl font-bold mb-6'>A Balanced Life</h3>
            <div className='max-w-3xl mx-auto text-gray-300 flex flex-col gap-4'>
              <p className=''>
                I believe in maintaining a balance between analytical rigor and
                creative expression. Whether I'm analyzing financial data or
                creating digital illustrations, I bring the same attention to
                detail and passion for excellence.
              </p>
              <p className=''>
                My diverse interests inform my professional work, bringing fresh
                perspectives to financial challenges and fostering innovative
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
