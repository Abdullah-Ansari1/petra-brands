import { Button, Heading, Img, Text } from '@/components/ui';
import BannerMarquee from '@/components/BannerMarquee';

const Hero = () => {
    return (
        <>
            <div className="relative h-[58.75rem]">
                <Img
                    src="img_dfgdfgre_1.png"
                    width={740}
                    height={940}
                    alt="Featured Image"
                    className="absolute bottom-0 right-0 top-0 h-[50.75rem] w-[50%] object-contain"
                />
                <div className="absolute left-0 right-0 top-[10%] mx-[5.88rem] my-auto flex flex-1 flex-col items-start md:mx-0">
                    <Heading
                        size="heading6xl"
                        as="h1"
                        className="w-[44%] font-tttravelsnexttrl text-[4.50rem] font-semibold leading-[4.56rem] tracking-[-0.06rem] text-indigo-900 md:w-full md:px-[1.25rem] md:text-[3.00rem]"
                    >
                        Powering the Next Generation of Global Consumer Brands
                    </Heading>
                    <Text
                        size="text3xl"
                        as="p"
                        className="mt-[0.50rem] w-[42%] text-[1.25rem] font-normal leading-[1.38rem] tracking-[0.00rem] text-gray-800_01 md:w-full md:px-[1.25rem]"
                    >
                        Operating on a global scale, we move with the energy and direction of today’s fast-paced world, transforming traditional categories and leading them into the future.
                    </Text>
                    <Button
                        size="xs"
                        shape="round"
                        rightIcon={
                            <div
                                className="rounded-[50%] !bg-[#AF8160] p-[0.5rem]"
                            >
                                <Img
                                    src="img_arrowleft.svg"
                                    width={15}
                                    height={15}
                                    alt="Arrow Left"
                                />
                            </div>
                        }
                        className="mt-[2.13rem] py-1 w-full min-w-[15.50rem] max-w-[16.5rem] gap-[0.75rem] rounded-[26px] !border-[1.2px] border-[#000] font-dmsans font-medium"
                    >
                        Explore Our Brands
                    </Button>
                </div>
                <Img
                    src="img_banner_home_triangle.png"
                    width={450}
                    height={391}
                    alt="Agency Image"
                    className="absolute top-[-16%] bottom-[0.00rem] right-[0.06rem] m-auto h-[50.75rem] w-[40%] rounded-[18px] object-contain"
                />
                <Img
                    src="img_creative_agency.png"
                    width={480}
                    height={234}
                    alt="Agency Image"
                    className="absolute bottom-[16%] right-[0.7rem] m-auto h-[14.63rem] w-[34%] rounded-[18px] object-contain"
                />
            </div>
            <BannerMarquee />
        </>
    )
}

export default Hero
