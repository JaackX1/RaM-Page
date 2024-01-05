import React, { Fragment } from 'react'
import { Tooltip } from 'react-tooltip'

interface TagsProps {
  id:number;
  title: string;
  type: string;
}

const TagsSocial: React.FC<TagsProps> = ({ id, title, type }) => {
  const ToolTipId = 'my-'+type+'-'+id;
  return (
    <Fragment>
      <p 
        className="px-3 py-1 text-[12px] bg-[#d9dfe3]  max-w-max rounded font-semibold text-[#7281a3] cursor-pointer" 
        data-tooltip-id={ToolTipId}
        data-tooltip-content={type}
      >
        #{title}
      </p>
      <Tooltip id={ToolTipId} />
    </Fragment>
    
  )
}

export default TagsSocial
