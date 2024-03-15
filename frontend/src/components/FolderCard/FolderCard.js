import { Divider } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';
import icons from "../../assets/icons";
import { P } from '../Typography';

const FolderCard = ({ folder }) => {
  return (
    <Link className="flex flex-col w-[350px] h-[140px] p-4 grow-0 shrink-0 border-1 rounded-xl border-1 border-border shadow-small transition hover:drop-shadow-sm">
      <P className="text-primary-light line-clamp-1">{folder.title}</P>
      <Divider className="my-1" />
      <P variant="small" className="line-clamp-1 text-[16px] font-light">{folder.description}</P>
      <div className="flex items-end justify-between mt-auto gap-2">
        <P variant="tiny" className="text-primary-dark flex items-center mt-auto justify-center text-lg font-medium border-1 border-divider rounded-lg h-8 w-10 shadow-small">
          {folder.notes.length}
          {icons.note}
        </P>
        <P variant="tiny" className="font-medium text-foreground-primary ml-auto">{folder.date}</P>
        <span>{folder.public ? icons.public : icons.private}</span>
      </div>
    </Link>
  )
}

export default FolderCard;