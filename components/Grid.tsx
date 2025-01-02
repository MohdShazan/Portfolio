import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import { gridItems } from '../data'

interface GridItemType {
  id: number;
  title: string;
  description: string;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

function Grid() {
  return (
    <section id = "about">
<BentoGrid>
  {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}: GridItemType) => (
    <BentoGridItem 
      id={id}
      key={id}
      title={title}
      description={description}
      className={className}
      img={img}
      imgClassName={imgClassName}
      titleClassName={titleClassName}
      spareImg={spareImg}
    />
  ))}
</BentoGrid>

    </section>
  )
}

export default Grid