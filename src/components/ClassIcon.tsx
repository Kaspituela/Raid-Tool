import { useState } from 'react';
import type { LostArkClass } from '../types';
import { getClassIconSrc } from '../data/classIcons';

interface ClassIconProps {
  className: LostArkClass;
}

export function ClassIcon({ className }: ClassIconProps) {
  const [failed, setFailed] = useState(false);
  const src = getClassIconSrc(className);

  if (failed) {
    return (
      <div
        className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-600/80 text-[9px] text-zinc-400"
        title={className}
      >
        ?
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={className}
      title={className}
      className="h-6 w-6 rounded-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
