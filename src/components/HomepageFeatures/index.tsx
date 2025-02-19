import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Innovative Drone Technology',
    // Svg: require('@site/static/img/example_image.svg').default,
    description: (
      <>
        Our experimental autonomous drone leverages the latest in robotics and
        simulation to push the boundaries of real-world flight and automation.
      </>
    ),
  },
  {
    title: 'Comprehensive Documentation',
    description: (
      <>
        From hardware setup to advanced autonomous control, our detailed guides
        help you understand every step of our process, whether you're a
        beginner or an experienced developer.
      </>
    ),
  },
  {
    title: 'Community-Driven Collaboration',
    description: (
      <>
        Developed under the UF Open Source Club (OSC), our project is fueled
        by a collaborative spirit, empowering innovators to contribute and
        learn together.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {Svg && 
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      }
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
