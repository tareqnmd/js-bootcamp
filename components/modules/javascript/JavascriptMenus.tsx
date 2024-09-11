import { javascriptMenu } from '@/lib/module/javascript/menu';
import JavascriptMenu from './JavascriptMenu';

const JavascriptMenus = () => {
	return (
		<div className="border-r dark:border-[#444]dark:border-light w-[220px] h-full">
			<JavascriptMenu menus={javascriptMenu} />
		</div>
	);
};

export default JavascriptMenus;