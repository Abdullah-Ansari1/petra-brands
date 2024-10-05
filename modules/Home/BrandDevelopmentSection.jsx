import { Img, Heading, Button, Text } from "@/components/ui";

export default function BrandDevelopmentSection() {
  return (
    <div className="flex justify-center !bg-deep_purple">
      <div className="mx-auto flex w-full max-w-[85.38rem] justify-center px-[1.38rem] md:px-[1.25rem]">
        <div className="flex w-full items-center gap-[2.5rem] md:flex-col">
          <div className="mt-[0.25rem] flex flex-1 flex-col gap-[2.38rem] md:self-stretch">
            <Heading
              size="text18xl"
              as="h3"
              className="text-[4.69rem] font-medium leading-[4.19rem] tracking-[-0.13rem] text-black-900_02 md:text-[3.00rem]"
            >
              Create Your Own Brand with Petra Spark
            </Heading>
            <div className="flex items-center md:flex-col">
              <div className="flex w-[48%] flex-col items-start gap-[2.88rem] md:w-full">
                <Text
                  size="textlg"
                  as="p"
                  className="w-[80%] text-[1.00rem] font-normal leading-[1.38rem] tracking-[0.00rem] text-black-900_02 md:w-full"
                >
                  From concept to creation, Petra Plus helps businesses bring their ideas to life with full-scale brand development services.
                </Text>
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="img_arrowleft.svg"
                      width={14}
                      height={14}
                      alt="Arrow Left"
                      className="h-[0.88rem] w-[0.88rem] rounded-[50%] pb-[0.63rem] pl-[0.63rem] pr-[0.75rem] pt-[0.75rem]"
                    />
                  }
                  className="w-full min-w-[12.75rem] max-w-[12.75rem] gap-[1.00rem] rounded-[26px] !border-[1.17px] tracking-[0.00rem]"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-end gap-[0.88rem] px-[3.13rem] md:self-stretch md:px-[1.25rem]">
              <Heading
                size="headingxs"
                as="h4"
                className="w-[92%] text-right font-milligramtrial text-[1.00rem] font-bold leading-[1.38rem] tracking-[0.00rem] text-black-900_02 md:w-full"
              >
                <span>
                  Design & Branding:
                  <br />
                </span>
              </Heading>
              <span className="font-normal">logos, packaging, and brand identities.</span>
              <Heading
                size="headingxs"
                as="h5"
                className="w-[92%] text-right font-milligramtrial text-[1.00rem] font-bold leading-[1.38rem] tracking-[0.00rem] text-black-900_02 md:w-full"
              >
                <span>
                  Content Creation:
                  <br />
                </span>
              </Heading>
              <span className="font-normal">Photography, videography, and marketing assets.</span>
              <Heading
                size="headingxs"
                as="h6"
                className="w-[92%] text-right font-milligramtrial text-[1.00rem] font-bold leading-[1.38rem] tracking-[0.00rem] text-black-900_02 md:w-full"
              >
                <span>
                  Global Manufacturing:
                  <br />
                </span>
              </Heading>
              <span className="font-normal">Efficient and scalable production for any product line.</span>
            </div>
          </div>
          <Img
            src="img_dsc05379_1_1.png"
            width={536}
            height={438}
            alt="Brand Image"
            className="h-[26.88rem] w-[42%] rounded-[26px] object-contain md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
