import {
  forwardRef,
  ComponentProps,
  RefAttributes,
  ForwardRefExoticComponent,
  SVGProps,
} from 'react'

export interface CardProps
  extends Omit<ComponentProps<'div'>, 'className' | 'children'> {
  title: string
  description: string
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & RefAttributes<SVGSVGElement>
  >
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, Icon, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white bg-opacity-5 rounded-md shadow p-4 relative overflow-hidden h-full"
        {...rest}
      >
        <div>
          <span className="absolute right-3 bottom-3 flex items-center justify-center rounded-md opacity-50">
            <Icon className="h-12 w-12 text-[#128c7e]" aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold text-[#128c7e]">{title}</h3>
          <p className="mt-2 text-base text-gray-300 flex-1 max-w-[80%]">
            {description}
          </p>
        </div>
      </div>
    )
  },
)

export default Card
